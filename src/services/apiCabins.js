import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
export async function createEditCabin(newCabin, id) {
  //https://gxnovrprgynqlwoygjqt.supabase.co/storage/v1/object/public/cabin-image/cabin-001.jpg
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const image = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-image/${image}`;
  //create/edit cabins

  let query = supabase.from("cabins");

  //1.Create cabins
  if (!id)
    query = query
      .insert([{ ...newCabin, image: imagePath }])
      .select()
      .single();
  //Edit

  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error(`Cabins could not be ${id ? "edited" : "created"}`);
  }
  //2.Upload cabins image
  if (hasImagePath) return data;

  const { error: storeError } = await supabase.storage
    .from("cabin-image")
    .upload(image, newCabin.image);
  //3.Delete the cabins if there was an error uploading image
  if (storeError) {
    await supabase.from("cabins").delete().eq("id", data.id);
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

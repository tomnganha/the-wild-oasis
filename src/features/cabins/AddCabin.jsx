import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

/* function AddCabin() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal((pre) => !pre)}>Add new cabin</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateCabinForm onCloseModal={() => setShowModal(false)} />
        </Modal>
      )}
    </>
  );
} */
export default AddCabin;

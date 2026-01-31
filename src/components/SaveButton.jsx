function SaveButton({ addSave }) {
  return (
    <div className="container-three">
      <button className="button save-button" onClick={() => addSave()}>
        Save
      </button>
      <p>
        (Click <b>Save</b> button and open up console)
      </p>
    </div>
  );
}

export default SaveButton;

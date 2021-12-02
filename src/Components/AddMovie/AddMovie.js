import { useState } from "react";

import { Button, Modal, Form } from 'react-bootstrap'
// import movie9 from '../../Assets/movie9.jpg';


import './AddMovie.css'

const AddMovie = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);
  // const [newTitle, setNewTitle] = useState("");
  // const [newRating, setNewRating] = useState("");
  // const [newImg, setNewImg] = useState("");
  const [newMovie, setNewMovie] = useState({ title: "", rating: 1, img: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }

  const addMovie = (newMovie) => {
    setMovies([newMovie, ...movies])
    handleClose()
    setNewMovie({ title: "", rating: 1, img: "" })
  }

  return (
    <>
      <Button variant="light" onClick={handleShow} className="addBtn">
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
          {/* Title of the new movie */}
          <Form.Control type="text"
            className="modalInput"
            // value={newTitle}
            // onChange={(e) => setNewTitle(e.target.value)}
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            placeholder="Enter movie title ..." />

          {/* Rating of the new movie */}
          <Form.Control type="number"
            className="modalInput"
            // value={newRating}
            // onChange={(e) => setNewRating(e.target.value)}
            name="rating"
            value={newMovie.rating}
            onChange={handleChange}
            placeholder="Enter movie rating ..." min="1" max="5" />

          {/* Img url of the new movie */}
          <Form.Control type="text"
            className="modalInput"
            // value={newImg}
            // onChange={(e) => setNewImg(e.target.value)}
            name="img"
            value={newMovie.img}
            onChange={handleChange}
            placeholder="Enter movie image URL ..." />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"
            onClick={() => addMovie({ id: Math.random(), title: newMovie.title, rating: newMovie.rating, img: newMovie.img })}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie

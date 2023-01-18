import { useState } from "react";
import {useNavigate} from 'react-router-dom'


function Add(props) {
  let navigate =  useNavigate()
  const [newForm, setNewForm] = useState({
    topic: "",
    icon: "",
    image: "",
    titleOne: "",
    urlOne: "",
    titleTwo: "",
    urlTwo: "",
    titleThree: "",
    urlThree: "",
  });

  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createTopics(newForm);
    setNewForm({
      topic: "",
      icon: "",
      image: "",
      titleOne: "",
      urlOne: "",
      titleTwo: "",
      urlTwo: "",
      titleThree: "",
      urlThree: "",
    });
    navigate("/lessisgreener")
  };
  return (
    <section className= "content-margin">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.topic}
          name="topic"
          placeholder="topic"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.icon}
          name="icon"
          placeholder="icon"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.titleOne}
          name="titleOne"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.urlOne}
          name="urlOne"
          placeholder="url"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.titleTwo}
          name="titleTwo"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.urlTwo}
          name="urlTwo"
          placeholder="url"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.titleThree}
          name="titleThree"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.urlThree}
          name="urlThree"
          placeholder="url"
          onChange={handleChange}
        /><br/>
        <input type="submit" value="Add Topic" />
      </form>
    </section>
  );
}

export default Add;

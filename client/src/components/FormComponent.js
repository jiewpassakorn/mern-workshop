import { useState } from "react";

const FormComponent = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    author: ""
  })
  const { title, content, author } = state

  //Define Value to state
  const inputValue = name => event => {
    console.log(name,"=",event.target.value)
    setState({...state,[name]:event.target.value})
  }
  return (
    <div className="container p-5">
      <h1>Write Content</h1>
      {JSON.stringify(state)}
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={inputValue("title")} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" value={content} onChange={inputValue("content")}></textarea>
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" className="form-control" value={author} onChange={inputValue("author")}/>
        </div>
        <br />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default FormComponent;
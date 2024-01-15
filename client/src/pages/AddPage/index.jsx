import "./index.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useEffect, useState } from "react";

const AddPage = () => {
  const [services, setServices] = useState(null);
  const [searchValue, setSearchValue] = useState('')
  const [sortValue, setSortValue] = useState(null)
  const getAllServices = async () => {
    const resp = await axios.get("http://localhost:3000/");
    setServices(resp.data);
  };
  const createService = async (values) => {
    const resp = await axios.post("http://localhost:3000/", values);
    getAllServices()
    console.log(resp);
  };
  const deleteService = async (id) => {
    const resp = await axios.delete(`http://localhost:3000/${id}`);
    getAllServices()
    console.log(resp);
  };
  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <section id="add-form">
        <h2>Service Add Form</h2>
        <Formik
          initialValues={{ image: "", title: "", category: "" }}
          validationSchema={Yup.object({
            image: Yup.string().required("Required"),
            title: Yup.string()
              .max(50, "Must be 50 characters or less")
              .required("Required"),
            category: Yup.string().required("Required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              createService(values);
              resetForm();
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <Field name="image" type="text" className="form-control" />
            <ErrorMessage name="image" />

            <label htmlFor="title" className="form-label">
              Title
            </label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage name="title" />

            <div>
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <Field name="category" type="text" className="form-control" />
              <ErrorMessage name="category" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </section>
      <section id="service-table">
        <div className="container">
            <input  type="text" className="search form-control" onChange={(e)=>setSearchValue(e.target.value)} />
            <button className="btn btn-dark" onClick={()=>setSortValue({property:"title",asc:false})}>Title A-z</button>
            <button className="btn btn-dark" onClick={()=>setSortValue({property:"title",asc:true})}>Title A-z</button>
            <button className="btn btn-dark" onClick={()=>setSortValue(null)}>default</button>
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services &&
              services
              .filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .sort((a,b)=>{
                if (sortValue && sortValue.asc === true) {
                    return a[sortValue.property].localeCompare(b[sortValue.property])
                }
                else if(sortValue && sortValue.asc === false){
                    return b[sortValue.property].localeCompare(a[sortValue.property])
                }
                else{
                    return 0
            }
              })
              .map((item) => (
                <tr key={item._id}>
                  <td>{item.image}</td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td><button className="btn btn-danger" onClick={()=>deleteService(item._id)}>Delete</button></td>
                </tr>
              ))}
          </tbody>
        </table>
        </div>
      </section>
    </>
  );
};

export default AddPage;

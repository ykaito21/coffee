import React from "react";
import Title from "../Globals/Title";

function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        <Title title="contact" />
        <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
            <form action="https://formspree.io/yuki@gochiso.jp" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="John Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="form-control"
                  rows="5"
                  placeholder="here is your description..."
                />
              </div>
              <button
                type="submit"
                className="btn btn-yellow btn-block text-capitalize mt-5"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

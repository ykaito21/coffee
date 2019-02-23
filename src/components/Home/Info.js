import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";

function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus quod facere consequuntur. Earum id a ea consequuntur
              exercitationem reiciendis dignissimos voluptatibus odio voluptate?
              Labore quod explicabo animi laudantium, deserunt, ipsam inventore
              reprehenderit neque quis velit nihil deleniti minus officia
              impedit harum. Molestias, esse? Ab, atque explicabo accusamus
              temporibus est similique.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;

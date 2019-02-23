import React from "react";
import ProductItem from "./ProductItem";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 426) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

function Products() {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => (
                  <ProductItem key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}

export default Products;

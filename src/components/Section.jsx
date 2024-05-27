import React, { useEffect, useState } from "react";
import Product from "./Product";
const Section = ({ onChange }) => {
  const [TotalVal, setTotal] = useState([]);
  const Total = (val) => {
    if (val == 1) {
      setTotal([...TotalVal, val]);
    } else {
      TotalVal.pop();
      onChange([TotalVal.length]);
    }
  };
  useEffect(() => {
    onChange([TotalVal.length]);
  }, [TotalVal]);
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Product
              onChange={Total}
              id={1}
              price={"1,77,999"}
              name={
                "SAMSUNG Galaxy Z Fold4 5G (Phantom Black, 256 GB) (12 GB RAM)"
              }
              img={
                "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/f/n/h/-original-imagh7nzh2gcdj2x.jpeg?q=70&crop=false"
              }
            />
            <Product
              onChange={Total}
              id={2}
              price={"1,64,999"}
              name={"SAMSUNG Galaxy Z Fold5 (Cream, 512 GB) (12 GB RAM)"}
              img={
                "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/z/j/k/-original-imagztmggmgfdt8d.jpeg?q=70&crop=false"
              }
            />
            <Product
              onChange={Total}
              id={3}
              price={"1,06,999"}
              name={"SAMSUNG Galaxy Z Flip4 5G (12 GB RAM)"}
              img={
                "https://rukminim2.flixcart.com/image/xif0q/mobile/q/u/o/-original-imagh7nnpy9wgyzh.jpeg"
              }
            />
            <Product
              onChange={Total}
              id={4}
              price={"1,39,999"}
              name={
                "SAMSUNG Galaxy S24 Ultra 5G (Titanium Black, 512 GB) (12 GB RAM)"
              }
              img={
                "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/e/8/-original-imahyvntxfrpuw6g.jpeg?q=70&crop=false"
              }
            />
            <Product
              onChange={Total}
              id={5}
              price={"1,34,999"}
              name={"SAMSUNG Galaxy S23 Ultra 5G (Cream, 512 GB) (12 GB RAM)"}
              img={
                "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/q/k/h/-original-imagzm8qmr7qxfhq.jpeg?q=70&crop=false"
              }
            />
            <Product
              onChange={Total}
              id={6}
              price={"77,999"}
              name={
                "SAMSUNG Galaxy S22 Ultra 5G (Burgundy, 256 GB)  (12 GB RAM)"
              }
              img={
                "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/z/p/-original-imaggj68yffchuwx.jpeg?q=70&crop=false"
              }
            />
            <Product
              onChange={Total}
              id={7}
              price={"1,09,999"}
              name={"SAMSUNG Galaxy Z Flip5 (Graphite, 512 GB)  (8 GB RAM)"}
              img={
                "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/6/p/-original-imagztmgkjzfsbpj.jpeg?q=70&crop=false"
              }
            />
            <Product
              onChange={Total}
              id={8}
              price={"1,09,999"}
              name={
                "SAMSUNG Galaxy S24+ 5G (Cobalt Violet, 512 GB)  (12 GB RAM)"
              }
              img={
                "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/i/g/r/-original-imahyvnu4jvpneha.jpeg?q=70&crop=false"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;

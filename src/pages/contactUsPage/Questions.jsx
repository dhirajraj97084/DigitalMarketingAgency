import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { FaPlug, FaPlus } from "react-icons/fa";

function Questions() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-center text-deep-purple-500  font-bold py-4">
          POPULAR QUESTIONS
        </h1>
        <h1 className="text-2xl font-bold text-center">
          Frequently Ask Questions.
        </h1>
        <p className="text-center py-2 text-balance">
          Curious about digital marketing? Explore our frequently asked
          questions below to gain valuable insights and find solutions to your
          queries
        </p>
        <div className=" mx-3">
          <div className="left py-6 flex justify-center">
            <div className=" ">
              {/* one */}
              <div className="one pb-4">
                <Button
                  className="ques01  w-full md:w-[50em] flex bg-gray-200 text-deep-purple-500  outline-none justify-between "
                  onClick={toggleOpen}
                >
                  What is Digital Marketing?
                  <h1>
                    <FaPlus />
                  </h1>
                </Button>

                <Collapse open={open}>
                  <Card className="my-1 md:w-[50em] bg-gray-100 ">
                    <CardBody>
                      <Typography>
                        Digital marketing is a broad term that includes
                        everything from social media strategy to website
                        optimization. It is an umbrella term for the
                        fast-evolving field of online marketing, spanning many
                        different industries and professions.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              {/* two */}
              <div className="two pb-4">
                <Button
                  className="ques02  w-full md:w-[50em] flex bg-gray-200 text-deep-purple-500   outline-none justify-between "
                  onClick={toggleOpen}
                >
                  What are the benefits of digital marketing for my company?
                  <h1>
                    <FaPlus />
                  </h1>
                </Button>
                <Collapse open={open}>
                  <Card className="my-1 md:w-[50em] bg-gray-100 ">
                    <CardBody>
                      <Typography>
                        Digital marketing is a great way to reach more people
                        than ever before. Find out how to use social media,
                        influencer marketing, SEM, content marketing and more
                        tools to bring in new customers. ⁣
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              {/* three */}
              <div className="three pb-4">
                <Button
                  className="ques02  w-full md:w-[50em] flex bg-gray-200 text-deep-purple-500   outline-none justify-between "
                  onClick={toggleOpen}
                >
                  How do I get my business started with Digiswarm?
                  <h1>
                    <FaPlus />
                  </h1>
                </Button>
                <Collapse open={open}>
                  <Card className="my-1 md:w-[50em] bg-gray-100 ">
                    <CardBody>
                      <Typography>
                        It’s quite simple! We have a few steps to start the
                        process. Reach out to us by Phone- +91 967 5002 001 or
                        Email- contact@Digiswarm.com, We’ll work together to
                        gather more information about your project and offer a
                        tailored quote.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              {/* four */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Questions;

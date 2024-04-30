import React from 'react'
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";

import { FaPlug, FaPlus } from "react-icons/fa";

function FaqHero() {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div>
      <div className="box py-8 px-6 md:px-12 lg:px-28 ">
        <div className="heading">
          <h1 className='font-bold text-3xl text-deep-orange-500 text-center md:text-start pb-2'>FAQ</h1>
          <h2 className='text-2xl font-bold md:text-4xl text-black text-center md:text-start'>Frequently Asked Questions</h2>
        </div>
        <div className="boxes gap-12 flex items-center justify-between">
          <div className="left pt-4">
            <div className=" ">
              {/* one */}
              <div className="one pb-4">
                <Button className="ques01  w-full flex bg-gray-200 text-deep-orange-500 outline-none justify-between " onClick={toggleOpen}>1. What is digital marketing?
                  <h1><FaPlus /></h1>
                </Button>
               
                <Collapse open={open}>
                  <Card className="my-1 mx-auto bg-gray-100 ">
                    <CardBody>
                      <Typography>
                      Digital marketing leverages online channels (SEO, social media, etc.) to promote businesses and connect with a global audience.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              {/* two */}
              <div className="two pb-4">
                <Button className="ques02  w-full flex bg-gray-200 text-deep-orange-500  outline-none justify-between " onClick={toggleOpen}>2. How does it benefit my business?
                  <h1><FaPlus /></h1>
                </Button>
                <Collapse open={open}>
                  <Card className="my-1 mx-auto bg-gray-100 ">
                    <CardBody>
                      <Typography>
                      Boosts visibility, targets the right audience, and drives sales through effective online strategies.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              {/* three */}
              <div className="three pb-4">
                <Button className="ques02  w-full flex bg-gray-200 text-deep-orange-500  outline-none justify-between " onClick={toggleOpen}>3. How do you measure success?
                  <h1><FaPlus /></h1>
                </Button>
                <Collapse open={open}>
                  <Card className="my-1 mx-auto bg-gray-100 ">
                    <CardBody>
                      <Typography>
                      Success is measured through website visits, user engagement, and increased sales.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              {/* four */}
              <div className="four pb-4">
                <Button className="ques02  w-full flex bg-gray-200 text-deep-orange-500  outline-none justify-between " onClick={toggleOpen}>4. What sets your agency apart?
                  <h1><FaPlus /></h1>
                </Button>
                <Collapse open={open}>
                  <Card className="my-1 mx-auto bg-gray-100 ">
                    <CardBody>
                      <Typography>
                      Our agency stands out with personalized strategies tailored to your business and a commitment to staying current with industry trends.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>
              </div>
              {/* five */}
              <div className="four pb-4">
                <Button className="ques02  w-full flex bg-gray-200 text-deep-orange-500 outline-none justify-between " onClick={toggleOpen}>5. How much does it cost?
                  <h1><FaPlus /></h1>
                </Button>
                <Collapse open={open}>
                  <Card className="my-1 mx-auto bg-gray-100 ">
                    <CardBody>
                      <Typography>
                      Costs vary based on services needed, with flexible pricing to fit your budget and goals.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>              
              </div>
              <div className="four pb-4">
                <Button className="ques02  w-full flex bg-gray-200 text-deep-orange-500 outline-none justify-between " onClick={toggleOpen}>6. Why should we choose DigiPhlox as our digital marketing partner?
                  <h1><FaPlus /></h1>
                </Button>
                <Collapse open={open}>
                  <Card className="my-1 mx-auto bg-gray-100 ">
                    <CardBody>
                      <Typography>
                      DigiPhlox is the leading and the best digital marketing agency in Haldwani. With over 5+ years of experience we have helped many businesses to grow with our professional digital marketing services.
                      </Typography>
                    </CardBody>
                  </Card>
                </Collapse>              
              </div>
            </div>
          </div>
          <div className="right hidden md:block  ">
            <img className='' src="https://digiphlox.com/wp-content/uploads/2023/11/Layer-011-1874x2048.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqHero

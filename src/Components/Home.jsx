import React from "react";
import "../Styles/Home.css";
import { Box, Image, Text } from "@chakra-ui/react";
import { ImageCard } from "./ImageCard";
import whitetbadge from "../Images/whitetbadge.svg";
import schoolImg from "../Images/blog.png";
// import CountUp from 'react-countup';
import mobile from "../Images/mockup.png";
let horseImage =
  "https://s3-alpha-sig.figma.com/img/4e0a/c460/2c0383f400220dcb63e7c93c7e04b629?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h5TrP94pPaUA8~e0LDL5Td3ECiGjji-Y1e5ReSqyKlyzRhp27py4SRXrcTyierP~Du-XLAL1eblvjpwFP5bLIp7m-ApH01641XGNHUSoXXS~U12ubvyurWYYsNnV1J-q9lUxDJWIZ06uy3j58Ak4k-c-ch5COOtcDmniHlbLgiT~TpfTHysYp7I67SwDj0trndKtq7CH69pTA-Pkgxs3OXyG6IizFfFhbX4tpuPyXyc8LEf-gQgVYAvf2KTUC8TXrPsqXHVhhZn-T6fi-VrMXZnzTw0qxMGoVLUgQs6fXM8C2G4cB6bfjujDCfSqDci9s7pB8mTt~8C5iWFxsWNzww__";
let horseTitle = "Horse Riding";
let horsedes = "22 Acres, Pollution- Free, World-Class.";
let swimmingImage =
  "https://s3-alpha-sig.figma.com/img/0805/aac5/4ba7a2e8b502c70814e51c05d023bce1?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BwMie0ePzus2aiR9pJUMXZItA6FWFxZCeYs352MxlT3s5ajiaKfPcbooSuju7cB-jMAwH2lsz8neSW2W65RiC72mpkAB2QMzvbmwnQOigCn6zzFXj1qNqSesJ27ZSXsJJN5zKsQybAIREatK2LYvLY4gCEcuM8E7MGMY8bi1hBI6TJOKcJqDXyw5xCeSeAa1CpqMSRBbHLSQgtO6EtNwnFMKvAIviGCZE4Q10VdhY0xhH8-PEUl66IdZQCQvIhT1Vf8z9lOG6-mMQVv2XivqX8gPJMm~~UFjsgAdXKdcn27ME3opFcGz5P4QPzPGaEvWAHyOf8T26K7ZFhba4uu8~Q__";
let swimmingTitle = "Swimming";
let taekImage =
  "https://s3-alpha-sig.figma.com/img/f6c9/6040/f9653461eb9b6309e40f102bf5863b7e?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=daEeT0vzcucrZD7ZMzkM90bIM7bP7sUK8OlfQXFPMGKYj7u3WzRgyrSroM76ov9vPkDrDj37ERVHPTthrdeoFmJWFh89hJNsIa~hS5TZqzLzu-9PN~12Wk26IcngvFcYWzT6CEmRVsclFGIJvByXK~U1j6yRBtZzGn7Qv-EZVNoYZ0uA-mrwkuip1piZVQ7iXJ-5dJ8iuYEEQggH0tzbkfesFyMB9z-LG25tJ7BHDc4r9yYwM3mw-Per8zy4NTC8uiJpdvYHbQ3jyV3jGuDl6d8bDF4bpQtQR-Q2eO-i4Pbb6~v6WW6Mm8jj6gZL-QQjZDJJeyoOTFMQv6N~DrOMEQ__";
let taekTitle = "Taekwondo";
let TopSchoolImg = "https://s3-alpha-sig.figma.com/img/1b56/a70d/a83140ce1a61c66dfcd90d8a5689b94a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jEsyipHoIhX7TJOOZFdO3Z~ejJPQwOTS-DQCsn0vXw-twNcP4hePYQ7MdhOx~QFawZsKhvpyumdJFT3pOxW3ymHrF78WeVaWBNSxmrEt8ST5GhmSmqPs-gTVW9bM1e9dgZSi5YrEqv3VGf0ek-ObnVBUHwBLFvvICWY1zVvOptkEhGL31S9-gEzNq3yK6Z1OFbRmv7uFEXBIevX6-zeoocI3bJ~6zdG2jIIi8TTs3TIrXG3geUCS8ARQv6DwbvCOMPZiP-iBqvC5XaQOCNzqwLCOyXW9fAVbExr9AHXS0zlDn7V0MnZdQhEYR6hjk0GSEfzEz9cQcL1fJnwX4ItrgA__"
let TopDescriptor = "Top Boarding School in Uttarakhand, India"
let InterSchoolImg = "https://s3-alpha-sig.figma.com/img/61b5/c276/bc9709f7431373bf6017f0cd846dce95?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jH8wGahMBbuyu842KOEVMj~L2nPWnPq-VmG4uSmswmQ4x~vWZJDXMcX60dq0rcAEkjWxL9CdK3Kaz~6D8qjwQW9hCXnypa1G4S~5pMHKpVbUpIA5Mi~Exhy5~jc6OXvFjvk8UYDrW1O0AIdb5QIzJLLfGV0G9EgoSj07mPzi9zHtpDL6b4Oy8cIKJE14gun2-9rNyLvKTc-pjRlsWX1jyHY3TMJocD5-yXDNomOodSiV5DWmB2aN6AodJkk2-~ygWkArPSjuBYbUoVddcQJK8aBSbn-oU-zLXaYUDmnk9yVVFWT6SBVTQAPVqBgrxdT4Nz3W8K91xOA-6sHdJU2Vhg__"
let InetrDescription = "International School Award, India 2019"
let BestSchhoolImg  ="https://s3-alpha-sig.figma.com/img/2090/e719/9ec1b8f4862bbdb65a5dc0798dd7b81b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OgvviyY3VYwy3VZXhadnPmAk2y7sm8YI5yXAnslFkM-u5WpoC4CS~rw~A1oUzxRZpGzW~0zg6SxrLmSVvylbNNrbMAoR5EDIiT1JZayOGNsk~hVA~UlhaftE2-ZV0IuOTUc5ZlSOoGu2s~0nkaw4g8AaI02LnRkYNVLGwcqDfmQ-zLj05NfkvnEgWYpocgCviuwg7SJCF6UWuYxpbro0JMptVQRiLfwHIKVtPdJ~Lt5Y~NRghPuBM1g2t8ezys~FkpODSoW6AtQzFrEhQLCyCzwzeMOdpOgjVWxmrFyI4WnqNJ6noyykUBYwkGxUDeq~QKAXaqsm-CwDnPU1BDiA0Q__"
let BestDescription = "Best Residential School in Uttarakhand, India"
export const Home = () => {
  return (
    <>
      <div>
        <Box w="90vw" h="95vh" m="auto" display="flex" p="10px"  >
          <Box display="flex" flexDirection="column" gap="70px">
            <Box>
              <Text className="itelic-text" w="456px">
                Our commitment to all-round development shines in diverse
                extracurricular activities.
              </Text>
              <Text color="#60BDBB" fontSize="25px">
                ( Our Students love that! )
              </Text>
            </Box>
            <Box ml="40px">
              <ImageCard
                image={swimmingImage}
                title={swimmingTitle}
                description={horsedes}
              />
            </Box>
            <Box
              display="flex"
              border="2.5px solid #DBC79F"
              p="6px"
              justifyContent="space-around"
              w="250px"
              borderRadius="34.5px"
              className="see-all"
            >
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="#644810"
                alignSelf="center"
              >
                SEE ALL ACTIVITIES
              </Text>
              <Image
                w="38px"
                h="25px"
                src="https://s3-alpha-sig.figma.com/img/2b85/93a2/7d3a9eac7549e11d7cd1bd6f5cbb5a3b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fr1uQOSbnr9nT1klmA-XCoTmp-DYgomnt3FG2KFRttgdrAtDL06fPve1nyvIoTyw0PLRl~nbMjt1PCpDON5Vmwv8dtd64B3EiW9RyMINObEE5b7z81rtSHjRI~GJo5cVU95c6BgXG-~WihKR7d8qvHUytcz62gU7cJjedUYXTwh12BEX6MG5o2pyWWMQat41UxbTwR4zVscHESW1dZU63FB68QGprNzUJL8~G~dGJSSEl2yEXem99uImZsZ0csAnVE7hYGJki54xKzJYq~N6KMZAeGgJWgze~PVZBVdCyr3Xhx2Ah3N9~5QuILexWpqGtcYUCcPgVylBf6suFJie4g__"
              />
            </Box>
          </Box>
          <Box display="flex">
            <Box alignSelf="center">
              <Image src="https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__" />
            </Box>
          </Box>
          <Box>
            <Box mt="30px" ml="10px">
              <ImageCard
                image={horseImage}
                title={horseTitle}
                description={horsedes}
              />
            </Box>
            <Box ml="50px" mt="50px">
              <ImageCard
                image={taekImage}
                title={taekTitle}
                description={horsedes}
              />
            </Box>
          </Box>
        </Box>
        <Box className="sec-seccion">
          <div
            style={{
              position: "relative",
              width: "98.5vw",
              height: "100vh",
              borderRadius: "15px",
            }}
          >
            <div
              className="img-card-yt"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundImage: `url(https://s3-alpha-sig.figma.com/img/a28b/9f5f/b3c65245636894337842651c84e28ada?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hGIdhsECkBBA6ZEicDZNtsLwhOeEprV62dk061u6lL-N0kAVQj1Z9D~OjRTApZrpmA-wwdW9bvnHixg~wN5CFhIIUlwq~wqJj~vvPHSOgmvKjS5TeEYP7aRQrAhqjNzqVXUar7ZDCQfsyxl5jOktszJDPMQoi3YnqrQNiIM-5lSpZzv89OcK5u5B9qB6FF6nTnb2Jy7Zh~WbS6ZEMbm~8OuC~D-HrTrwsuzKvWFcCKs7WSKK3HufvRfFBqsr66-lfj55GBuLxP2kurAZs219F3hfsR6QDAXLqhz1fTBsoRv3e~StxwhVWg8bljDGNrxSJ5wsPGtwjNk-zNX2-XNBCQ__)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "15px",
                filter: "brightness(50%)",
              }}
            ></div>
            <div className="bottom-img">
              <Image
                src={"https://i.pngimg.me/thumb/f/720/m2i8i8N4m2H7m2b1.jpg"}
                style={{ mixBlendMode: "multiply" }}
                borderRadius="20px"
                w="100px"
                h="70px"
                alt=""
              />
            </div>
          </div>
        </Box>
        <Box className="third-seccion">
          <Box
            className="school-better"
            w="90vw"
            m="20px auto 0px"
            display="flex"
            justifyContent="space-between"
          >
            <Box w="350px" h="440px" position="relative">
              <Image
                src="https://s3-alpha-sig.figma.com/img/fa23/ede2/89a9dcfcc8953ab542e1ecec581ce3ff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dqN79bwL6O~IG7kBSamKa1~ScfRBv7PFKNscaIXNHQpq2RZOnGW-DYBwyIOL45NZr3bJWZdj6pq4hEOewwwAz3BNA-YaGjWzXVzsBv25Sp07KT9M8Lyhq2-cNDIkL6WRovWthu~hlJSY8pG8oOP4X0aelh26zPmGo-iwEZD4ZbEhTy4EUas8x2fPlxIIiJVL4U7LcHc9X0O7G5Oj6yTGP7w3uDJh3DWVfaiVtWDJggboIV9jMt-CwP80zgtIdGY2dBFf0UPzSatB-ZUs1eCVHW~Kyy7ONSju7Dbznhu29RUMwu1j5y7pMSrz6vcUOk3v2~pTW2LSk3O7MmlyBAd99A__"
                w="100%"
                h="100%"
              />

              <Image
                position="absolute"
                src={whitetbadge}
                w="215px"
                h="150px;"
                top="270px"
                left="40px"
              />
            </Box>
            <Box mt="30px">
              <Text className="tula" w="740px">
                At Tula’s, we ask, “How can we make school better?”
              </Text>
              <Text w="600px" mt="10px" className="latest-text">
                Using the latest research on how girls learn best, we designed
                an innovative modular schedule, personalized for each student.
                Our girls are focused, not overwhelmed. “Girls Rule” isn’t just
                a saying here. Develop leadership skills, build compassion, gain
                responsibility, and prepare to change the world.
              </Text>
              <Box w="640px" display="flex" flexDirection="column" mt="70px">
                <Box
                  display="flex"
                  border="2.5px solid #DBC79F"
                  p="6px"
                  justifyContent="space-around"
                  w="250px"
                  borderRadius="34.5px"
                  alignSelf="end"
                  
                >
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="#644810"
                    alignSelf="center"
                  >
                    LEARN MORE
                  </Text>
                  <Image
                    w="38px"
                    h="25px"
                    src="https://s3-alpha-sig.figma.com/img/2b85/93a2/7d3a9eac7549e11d7cd1bd6f5cbb5a3b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fr1uQOSbnr9nT1klmA-XCoTmp-DYgomnt3FG2KFRttgdrAtDL06fPve1nyvIoTyw0PLRl~nbMjt1PCpDON5Vmwv8dtd64B3EiW9RyMINObEE5b7z81rtSHjRI~GJo5cVU95c6BgXG-~WihKR7d8qvHUytcz62gU7cJjedUYXTwh12BEX6MG5o2pyWWMQat41UxbTwR4zVscHESW1dZU63FB68QGprNzUJL8~G~dGJSSEl2yEXem99uImZsZ0csAnVE7hYGJki54xKzJYq~N6KMZAeGgJWgze~PVZBVdCyr3Xhx2Ah3N9~5QuILexWpqGtcYUCcPgVylBf6suFJie4g__"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="Why-TIS">
          <p>
            Why <span>TIS ?</span>
          </p>
        </Box>
        <Box
          className="forth-seccsion"
          display="flex"
          justifyContent="space-between"
          w="90vw"
          m=" 40px auto"
        >
          <Box w="400px" h="300px" alignSelf="center">
            <Text className="focus">A FOCUS ON...</Text>
            <Text className="management">MANAGEMENT</Text>
            <Text className="friendly-para" mt="40px">
              Extremely Friendly and Approachable Management. Tula’s
              International School combines – respect for tradition with a
              progressive application of modern sciences, academic rigour with a
              caring heart, and individual appreciation with the warmth of a
              school community
            </Text>
          </Box>
          <Box w="400px" h="430px">
            <Image
              src="https://s3-alpha-sig.figma.com/img/9bdc/ca4b/4b5601dd8eab0cabe738f612b9d33640?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BgJ9119CEKKzHZTi-lYNRwD6dLjYKYMnOFRFtqQEcn7LVlUVSIH1AFkjOc-fJFV2QDSAGmA-1k2Y~UEyyqJWBjlzYr7ERiXr3FcePAuR4zBVELKvepydY9XQf0QQhVKJDyRaS05E0rrQTtZMd89SioQ-kyXQDIjWmnVPTNYBIeXh8uw7q~pkMUr0L2FqdS9l5nTAWraCK-ZMdzK3XG9J7gwglG5bf9VT6qW5Me1ogd9BHxwDRKwxYHa-v7~CtWFHCy6bSjIWvSh5I5dYkZlud8lRQAyDtldmhXq9KlPq3e5P4K--LoY2k~OPARFPAD0WVH6zVylvM5fteg5j0hReTg__"
              w="100%"
              h="100%"
              borderRadius="15px"
              boxShadow="23px 23px 30px 0px rgba(0, 0, 0, 0.25);"
            />
          </Box>
          <Box
            w="150px"
            h="430px"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            backgroundColor="white"
          >
            <Box m="auto">
              <Image
                className="img-castle"
                m="auto"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYdaKG0o4M-rbM4xBQ--ZSHvSxboUEQ0Jgg"
                }
                w="60px"
                h="50px"
              />
              <Text fontSize="xs" w="150px" textAlign="center">
                CAMPUS
              </Text>
            </Box>
            <Box m="auto">
              <Image
                className="img-castle"
                m="auto"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYdaKG0o4M-rbM4xBQ--ZSHvSxboUEQ0Jgg"
                }
                w="60px"
                h="50px"
              />
              <Text fontSize="xs" w="150px" textAlign="center">
                EXPERT INSTRUCTION
              </Text>
            </Box>
            <Box m="auto">
              <Image
                className="img-castle"
                m="auto"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYdaKG0o4M-rbM4xBQ--ZSHvSxboUEQ0Jgg"
                }
                w="60px"
                h="50px"
              />
              <Text fontSize="xs" w="150px" textAlign="center">
                TRAINING METHODS
              </Text>
            </Box>
            <Box m="auto">
              <Image
                className="img-castle"
                m="auto"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYdaKG0o4M-rbM4xBQ--ZSHvSxboUEQ0Jgg"
                }
                w="60px"
                h="50px"
              />
              <Text fontSize="xs" w="150px" textAlign="center">
                RATIO
              </Text>
            </Box>
            <Box
              m="auto"
              borderRadius="15px"
              w="130px"
              backgroundColor=" #EB002D"
            >
              <Image
                className="img-castle"
                m="auto"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYdaKG0o4M-rbM4xBQ--ZSHvSxboUEQ0Jgg"
                }
                w="60px"
                h="50px"
              />
              <Text fontSize="xs" w="130px" textAlign="center">
                MANAGEMENT
              </Text>
            </Box>
          </Box>
        </Box>
        <Box
          className="fifth-seccsion"
          w="100vw"
          h="70vh"
          style={{
            position: "relative",
            width: "98.7vw",
            height: "90vh",
            backgroundImage: `url(${schoolImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="fifth-text" >
            <p>DIVINE INTO OUR...</p>
            <p>VIRTUAL TOUR</p>
          </div>
          <div className="number">
            <div>
              <p>100%</p>
              <p>College Acceptance</p>
            </div>
            <div>
              <p>20</p>
              <p>Years of Educational Excellence</p>
            </div>
            <div>
              <p>60%</p>
              <p>STEM Program Participation</p>
            </div>
            <div className="last-div">
              <p>15+</p>
              <p>Extracurricular Activities</p>
            </div>
          </div>
        </Box>
        <Box className="sixth-seccsion"  w="90vw" h="95vh"  m="120px auto" display="flex" flexDirection="row-reverse" p="10px">
          <Box display="flex" flexDirection="column" gap="70px">
            <Box>
              <Text className="itelic-text" w="456px">
              Awards and achievements, gleaming in sight, Honor efforts and perseverance in flight.
              </Text>
              <Text color="#60BDBB" fontSize="25px">
              (Everybody Loves that)
              </Text>
            </Box>
            <Box ml="40px">
              <ImageCard
              
                image={BestSchhoolImg}
                description={BestDescription}
              />
            </Box>
            <Box
              display="flex"
              border="2.5px solid #DBC79F"
              p="6px"
              justifyContent="space-around"
              w="250px"
              borderRadius="34.5px"
              className="see-all"
            >
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="#644810"
                alignSelf="center"
              >
                SEE ALL ACTIVITIES
              </Text>
              <Image
              

                w="38px"
                h="25px"
                src="https://s3-alpha-sig.figma.com/img/2b85/93a2/7d3a9eac7549e11d7cd1bd6f5cbb5a3b?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fr1uQOSbnr9nT1klmA-XCoTmp-DYgomnt3FG2KFRttgdrAtDL06fPve1nyvIoTyw0PLRl~nbMjt1PCpDON5Vmwv8dtd64B3EiW9RyMINObEE5b7z81rtSHjRI~GJo5cVU95c6BgXG-~WihKR7d8qvHUytcz62gU7cJjedUYXTwh12BEX6MG5o2pyWWMQat41UxbTwR4zVscHESW1dZU63FB68QGprNzUJL8~G~dGJSSEl2yEXem99uImZsZ0csAnVE7hYGJki54xKzJYq~N6KMZAeGgJWgze~PVZBVdCyr3Xhx2Ah3N9~5QuILexWpqGtcYUCcPgVylBf6suFJie4g__"
              />
            </Box>
          </Box>
          <Box display="flex">
            <Box alignSelf="center">
              <Image src="https://s3-alpha-sig.figma.com/img/bf56/d53b/e4ae8c11aa3b517d3b5f05edfa67ced4?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMHpbwP7USeuVo5tcjxx6vEboXa1YAJkPT34MU02u4SmkzJmhqohazql5GYBUAxx~1MCdIvmLbvpI2awK0zMKJdXv6x2V12q0ttTbiTfXk7-GMgMr3RIoRwS6eoYXZXxJMzEAOlREWbbiL47jmI3zePluBDppCkMZPQQk6XFglKzJkB8-Ffj-Qc5ff~YcXdP-7gvwkhzwsKnYEBfEHs3CsURyrpHpdBO8x~nt2hl-7i5WLJI~NOEFFlP9zeyY7a9dPidMymLyzTS4598YL-I22fIsG7UxAzwy05xeyPWQmAbnCBBfwF3l6vXWLWRcyxv1GvbJ5qvSA2VM2wL6EZxOA__" />
            </Box>
          </Box>
          <Box  mr="60px">
            <Box mt="30px" mr="50px" >
              <ImageCard
              
                image={TopSchoolImg}
                description={TopDescriptor}
              />
            </Box>
            <Box  mt="80px" ml="50px">
              <ImageCard
                image={InterSchoolImg}
                description={InetrDescription}
              />
            </Box>
          </Box>
        </Box>
        <Box className="eight-seccsion" display='flex' justifyContent='space-between'>
            <Box  w='700px' >
              <Box className="from-text" w='350px'm='40px auto 10px'>
                <p>From The</p>
                <p>Parents</p>
              </Box>
              <Box  w='550px' ml='30px' display='flex'>
                <Box w="60px" h='60px'>
                  <Image w='100%' h='100%' src='https://s3-alpha-sig.figma.com/img/161a/0b8e/45d8653303538ec3ac3354826b2e6782?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dEt5vXfuC~v1YXB8Qfm8Njw0iCFN6txt~YECSVwsNmNn8YvZhZlER04M~cTMKYfEb1FBfmTJbq7jVOnMwWH0TB3oegEGy5Fh2zmdTuafOmK2qMLpZUkB~kFRkTqexH-tkRYS9spLHcDFQ~BbyjjfAgtMiyhKJL4BcE3IXo0w4CvG-0uSUE0q77yTPgeBcu45Xt0pZkQibZXsV0NKBbY2sWafRfQPImBysOfWybIPd757ZYs99ib-zPUGspcf0FaRiKiEY2FAo7Qkau12lgj4rkidQcHSyRI5jxNlJA4IKD3Xz68kG0KXsCTY7pgtFWcCDsiu5IUsJOHeOLru6x66LA__'/>
                </Box>
                <Box h='0px ' alignSelf="center" mt='25px' w='500px' border='1px solid #B90124' >
                </Box>
              </Box>
              <Box   w='500px' m='20px 40px'>
                <p>
                What stands out to us is the school's emphasis on inBoxidualized attention. Our child's teachers have been attentive to their unique needs, providing the support and encouragement necessary for their academic success.

                </p>
              </Box>
            </Box>
            <Box  className="mobile-out"  w='340px' h='520px'>
              <Box  className="mobile-inner"  w='250px' h='500px'>

                <Image w='100%' h='100%' src={mobile} alt="" />
              </Box>
              <Box className="right-side-box">

              </Box>
            </Box>
        </Box>
          <Box className="sec-last" display='flex'  mt='30px' mb='80px'>
            <Box w='400px' h="350px" border='1px solid #A60028' borderRadius="0 50% 50% 0"  backgroundColor='#A60028'>
              <Text position='absolute' className="coll">COLLABORATIONS</Text>
                <Text  color='white' className="what-text" w='300px' mt='180px' ml='90px'>
                    What stands out to us is the school's emphasis on individualized attention. Our child's teachers have been attentive
                </Text>
            </Box>
            <Box  w='940px'>
              <Box  display='flex'ml='250px' mt='10px' w='690px' justifyContent='space-between'>
                <Image w='130px' h='130px' src='https://s3-alpha-sig.figma.com/img/5391/a3d8/69fec28ead8cd1088b81e0934d3d93ff?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4460dAESXfmr0eSwg0nfeAh22ogksmCR2omNAyYWQ7jmh4NIi~Mlp74HbyGSmSejU4ErE24v6P3C7t6fvHPxZKR96OQbxFwFmbn19PEkMNAlHkEu1Elpp5JD2BeMNbFG~iEzCE52VhF84aABV10PFZ1v-WRn4v1Ss-bG2Kb6bJ7ndmM3vbmnTrCzrzi-hIeN4oJqzhKzVp4LqF3tO8mGeFYGop9~~xN7SUCJI7o-37tb2QGaH0r3WYMVTvBEeJdgwvV9uZjYOJ-h~BhAzmxvmc4sUNLagxQwy2LToAQp6P3Q0bKFHj9YyM6SSWoQKMVZZCRoqWsuPKB6PrMZ6nBSg__'/>
                <Image src='https://s3-alpha-sig.figma.com/img/0635/95b9/4aeb15dacb687cce2ad18e2167ebf4cd?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WEU6whfYRO~by9lwFp74wxBDM20~9usXQgAfORjGP3M10oMrXOffljU4OBgdMwvSXWA355tXdoOqrdRh5hzYwJt~E75F1ooWpmDZtyIqdMpE47ZJAsU~FopyuSttThLFif-uANHcWH7Wp1OxZJxNqvqbvj-2MKTgO0pXD979gN~rTi-EjVGPOOWqjDmfW-uCzkm43jfP~ts6DfP~5UcMl3NrqIYzTYrzW-RGsJv56SvVBDHegsej8waq6XS25uVhfFq-kXKL2KzC78gXHjvdYxOx0uN~4BRV0T4JH9hueDVvmOgABNHDGN1JM38ylSMPDsI4qmFJs0iW6ZPqdnWKZA__'/>
                <Image src='https://s3-alpha-sig.figma.com/img/30dd/66a2/838ca5978afcbca0ce2cd0c477e9ac34?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j3IPwWjbbqdm5qTe70Bbib7Xa3EVNepFfnug3hfWSCjREoiMKKl5YoVZFzTn~hTjwQtZGK714b6BAo-bK1mwNlQE0PbbG4uwAls3BOc~T77oW6iUxF97ijpSqrW8zJpjHfgf-KRSR8KqULS2ZN0ZGQyQ8YEcgTmJsWMq0fq-4Olm3Rk6oX0ToBEez-ETdGit5l2iKZ4jbDPBzTvH4285t1SpUN2uzOUeGO0DjUujsmZRH8itIb2PULqdqsZFUXEMSXBieeTi25ZXuJljC9oAWldQqWFkUPx~~y3zGc8MlvZfRV-hmSqtb~hZ29CCIzotqTeSZATlFdAvWcx-mAfR-Q__'/>
                <Image src='https://s3-alpha-sig.figma.com/img/748d/3f89/5fef592a700914deb14100387f9eef07?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISRm03heTuAdqyY5RTQAarFE0Tz9lE-YQLzTC269d6RtEAqYLRVgFK6hln5kgDLB-3LaGNsxL35muxnuQhv7US1J2chuwjteh9uJkY1gox9frZHiPa2T2LF3H7Y4lmyNgGwa-xKGBffoJeBok~Php1pdKCmeZJuVa2tlcfLsJ9CXl1gIKeEnmbx2GhLJF4GJI5-VV~8WCG3RN~A9qu0S49N56zCClPcYXlHHlJkYnwpP7mBY1bDLLIsMwVz0gRXZuB7RVPq1832WNrhaN5OOLwQo4JYMj5gb15lUH5AShr2oCT-S6rPoHW75~3G6kGuCWctSxSABP5eWQAl5dCKsVQ__'/>
              </Box>
              <Box  w='910px' display='flex' ml='30px' mt='80px' justifyContent='space-between'>
                <Image src='https://s3-alpha-sig.figma.com/img/8dcb/5586/b2c39851b38e1d7da88a906ac86ff27c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g114n7Ac2YJFwzcoH5oizgEF-AuzjNixC1SCSSRq7NDkXSMUxScx4O1pRyUQyyc42yn7psmF7aR-8MAHBdkh1y4pXhrpF2wN-hjRTVKUn0YpIU2pennCU~zoH19BLaJq4Vx71PxJRMg7aboe7pquy62IBGg7KcftNclfXjEpDgXixv7J1QwzJxTqaSSvjBc-k~xnuRT~X2uA2kyEWjAcisLEQZZQe4Etd49C07rkJcpk6WmUUlFIx52DlfYh6J7dhmXOmZt6k6wXmTuqJ8rE7x75TVkPd6edgK9JRCekoLaSjh-Q7U34QixwIriGuocSYhhHd7lzQIkRAHJfB~jK5A__'/>
                <Image src='https://s3-alpha-sig.figma.com/img/93cb/2c64/317f74c3527e4bcbb355bcc2ea8e03cf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KNoYb81XoGQryurgsWEWyGPO0dNx6CxTTLvgbqGVUcFZ2Xg0JrhPUULGxTZM4qVHzeNrxn5lyohJ3E3723nWkay70es-cZ4wm5bYZpFJEZAK906qiwOkjwSIraEDqCSv5WjwbFdAcfqJDDIA~FBcG6aNY2DC15bFo4m7lplCw1H~yvC-Ylj9uVD3wPBjey-vO~V7DDao6keNNvy20~qTCvFJLBp4bStnWVnJtPtNtFJuGztIiFIlEXS5Dbx80CT~Zr~OAMo0o957hqDur3tFtMnH1rz9OrcoZo-A9VqU13luX~hLc4H9foJlyEFJu~8Dq~h-BOb3HW-9oBB7b3VYtg__'/>
                <Image src='https://s3-alpha-sig.figma.com/img/62de/41bb/39e38afa75609fd16e8e66c89dd48a2a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RfuyyMtX9EyBEj2QR05rTjNKmwWCFNdg8454tktFOugg1o-BDePsl6H68RBV64vDabdv438-AM9xFWyCJiTm9oWeXaUcsOiAZoEawQ2pEiyp6QriYEwsjmU5wrPSBsqyy4UZMnOBzhTLVp6AMnru7JuiCx9tLvTPJ4k430MHAzA4F-Fiq9LhIBBLlUgMcuu54WtqjOv96ssRjUxPkJi0FL1f5600nwovtrHP~WjOHiDCML5~NnH8x0r4x-1uMZ-~7-brHw3XqT87oySOzJEM5-HD-ry3qWJmOQflM7I27fmSgPm9U8WSO0GMqX6~IiWE4QcfaiqlxkJ0GfUtyj~IkA__'/>
                <Image src='https://s3-alpha-sig.figma.com/img/5e3b/1a4f/dd821f174f00e2ee0b3b9bcacedea095?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hf3VH8sl3kCh7vJzyU0IZpLTa1qkPOVXST1PxjUVJRpAz8JV6W-Z3LSFsloHtAVsqk55C-KYEKK3KtT68GngKyd4QgV4WgZqzgih5nd6zwt~QNwGrtboh2D7t5~4gnjg3XDJ3n~41aVm7O5kRrZJoT6xSCCLXU0JmMEoyVpc3f7~o9eS4lF2fCCDtF982YEB~6fmGqyqKVdd6j2RtZESmOxeZSusYFPHFUCPozajtKj4oClX~D~ekhBFkNXFmN83HNMi9XqOS5gC2JbYyPWpk~ipPElHcSfISf5opMTz-GmoaCURiDa1LZFSev333xs5T0N4Tlzs7giRrH0ojVU6fg__'/>
                <Image src='https://s3-alpha-sig.figma.com/img/55b9/e1a5/78ebf678324b0f5da7313e10d177786f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mya9KedIxR3PFlz8cGxbfNx0BTV~ZDwxrCTFMwq7qZizxsrlddnzglkNTHjqveHIAJYbgb7P5tzGquKKlZjeN5mRwOJDxH8nO2Z2anSgIb84mtO8jqtTznZz0ejB16xdJwqOYewhlrq8~hSABT6jGIdfdR6vOPA0sVkwJlcT7Ay7Hg2PK~4FsoCw-jClTOQTSAxStbGOY-ZXGOlmJNSmlLUJpThH~TSZ~7Pg8f93~-fcsG5TrPpQ0Ps5KjQaYSFvVqNnbM7ReGGnf8lysxCnvrhhkBeWfBOqUtqv84ztC-xvdCFvYu-SIBeq-KGj~HuORozrj4bwKorJknaRrzrGJg__'/>
              </Box>
            </Box>
          </Box>
        <div
       
      className="img-card-map"
      style={{
        position: "relative",
        width: "98.7vw",
        height: "90vh",
        borderRadius: "15px",
        border:"1px solid"
      }}
    >
      <div
        className="img-card-map2"
        style={{
          position: "relative",
          
          width: "100%",
          height: "100%",
          backgroundImage:
            `url(https://s3-alpha-sig.figma.com/img/f558/8cd0/91093103616e209a8817aa831fd61f6f?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qdX9fyPAj3L-ndVRXu~9cwvqgdHDRlddK3v0tMOBPU00Z2jlBk931lY8h7gR74lT5~~hgEV3inf-BwyMCNyCNHvzSY~idMIiaM5cmvp035~pPTRcN875KZaDARupPBO-6CcDiyJGCm2anMh6rXA5mXDC-dRI~wKGHr20sGkxcWdimD3S~BLpoeHZw~JgrUqpnSrzFn73XLO0vJmCGWlEp7g9J3GnACJ6zuDmONOM-m~m~DF81mkBXn52wty82R34wSFGXZbDxSB~7lPONyS7lOk0eo4VeVEdPPnAmMPTL0FcYxLfrR6WtGyNq5bjffGWuIq1e0Y99-Rm7nubaBytow__)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "15px",
          filter: "brightness(25%)",
        }}
      >

      </div>
        <div className="map-box">
          <p>BECOME A PART OF THE...</p>
          <p>TULA’S FAMILY</p>
          <p>VILL.DHOOLKOT, NEAR TULAS INSTITUTE SELAQUI NEAR MANDIR  Dehradun, Uttarakhand, 248197</p>
          
        </div>
        <div className="last-btns-div">
            <div>VIRTUAL TOUR</div>
            <div>APPLY NOW</div>
            <div>fedena LOGIN</div>
          </div>
    </div>
      </div>
    </>
  );
};

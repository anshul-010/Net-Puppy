import React from "react";
import "../Styles/Home.css";
import { Box, Image, Text } from "@chakra-ui/react";
import { ImageCard } from "./ImageCard";
import whitetbadge from "../Images/whitetbadge.svg";
import schoolImg from "../Images/blog.png";
import image from "../Images/image.jpg";
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
        <Box w="90vw" h="95vh" m="auto" display="flex" p="10px">
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
            >
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="#644810"
                alignSelf="center"
              >
                SEE ALL ACTIVITIES{" "}
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
            m="20px auto"
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
            >
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="#644810"
                alignSelf="center"
              >
                SEE ALL ACTIVITIES{" "}
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
      </div>
    </>
  );
};

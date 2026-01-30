import { Colors } from "@common/constant";
import { getMediaQueryCSS, getRatioSize } from "@common/util";
import React, { useState } from "react";
import styled from "styled-components";
import { globalLang, Lang } from "../../pages/_app";
import { useAtomValue } from "jotai";

enum Gender {
  Male = "Male",
  Female = "Female",
  Undefined = "",
}

type Validation = {
  name: boolean;
  email: boolean;
  gender: boolean;
  birth: boolean;
  phone: boolean;
  height: boolean;
  weight: boolean;
};

const Submit = () => {
  const lang = useAtomValue(globalLang);
  const [account, setAccount] = useState("");
  const [phase, setPhase] = useState(0);

  const obj = {
    [Lang.ENG]: {
      connectComment: "You need to connect your wallet.",
      askingConnect: "Do you want to connect?",
      completeInput: "Completed information entry",
      completeProvide: "LOVE300’s first token reward has been paid!",
      enterHealthData: "Enter your health data and receive LOVE300 tokens.",
      connect: "Connect",
      name: "Name",
      birth: "Birth",
      email: "Email",
      phone: "Phone",
      gender: "Gender",
      male: "Male",
      female: "Female",
      height: "Height",
      weight: "Weight",
      nameError: "Name is required.",
      birthError: "Birth is required.",
      emailError: "Email is required.",
      phoneError: "Phone is required.",
      genderError: "Gender is required.",
      heightError: "Height is required.",
      weightError: "Weight is required.",
      submit: "Submit",
      comment:
        "* The entered data is used to provide personalized healthcare solutions. The data is stored on the blockchain and managed transparently, and it will not be shared without your consent.",
    },
    [Lang.KOR]: {
      connectComment: "지갑을 연동해야 합니다.",
      askingConnect: "연동하시겠습니까?",
      completeInput: "정보 입력 완료",
      completeProvide: "LOVE300의 첫번째 토큰 보상이 지급되었습니다!",
      enterHealthData: "건강 데이터를 입력하고 LOVE300 토큰을 받으세요.",
      connect: "연결",
      name: "이름",
      birth: "생년월일",
      email: "이메일",
      phone: "휴대폰 번호",
      gender: "성별",
      male: "남성",
      female: "여성",
      height: "키",
      weight: "몸무게",
      nameError: "이름을 입력하세요.",
      birthError: "생년월일을 입력하세요.",
      emailError: "이메일을 입력하세요.",
      phoneError: "휴대폰 번호를 입력하세요.",
      genderError: "성별을 입력하세요.",
      heightError: "키를 입력하세요.",
      weightError: "몸무게를 입력하세요.",
      submit: "제출",
      comment:
        "* 입력된 데이터는 맞춤형 헬스케어 솔루션을 제공하는데 활용됩니다. 데이터는 블록체인에 저장되어 투명하게 관리되며, 귀하의 동의 없이는 공유되지 않습니다.",
    },
  };

  const [submitData, setSubmitData] = useState<{
    name: string;
    phone: string;
    email: string;
    birth?: string;
    gender?: Gender;
    height?: string;
    weight?: string;
  }>({
    name: "",
    phone: "",
    email: "",
    birth: "",
    gender: Gender.Undefined,
    height: "",
    weight: "",
  });

  const [touched, setTouched] = useState<Validation>({
    name: false,
    phone: false,
    email: false,
    birth: false,
    gender: false,
    height: false,
    weight: false,
  });

  const validate = (): Validation => {
    const errors = {
      name: !submitData.name,
      phone: !submitData.phone,
      email: !submitData.email,
      birth: !submitData.birth,
      gender: submitData.gender === Gender.Undefined,
      weight: !submitData.weight,
      height: !submitData.height,
    };
    return errors;
  };

  const errors = validate();

  const handleBlur = (field: string) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const onChangeSubmitData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubmitData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isSubmitDisabled = Object.values(errors).some((error) => error);

  return (
    <SumbitWholeLayout>
      <EllipseRight src={"/love300/ellipse.png"} alt={"ellipse"} />
      <EllipseLeft src={"/love300/ellipse.png"} alt={"ellipse"} />
      <SubmitLayout>
        <ConnectContainer $fadeIn={phase !== 0}>
          <CompleteComment>
            {obj[lang].connectComment}
            <br />
            {obj[lang].askingConnect}
          </CompleteComment>
          <ButtonContainer>
            <Button
              onClick={() => {
                setPhase(1);
              }}
            >
              {obj[lang].connect}
            </Button>
          </ButtonContainer>
        </ConnectContainer>
        <CompleteContainer $fadeIn={phase !== 2}>
          <CheckImg src={"/love300/check.svg"} alt={"check image"} />
          <CompleteComment>
            {obj[lang].completeInput}
            <br />
            {obj[lang].completeProvide}
          </CompleteComment>
        </CompleteContainer>
        <SubmitContainer $fadeIn={phase !== 1}>
          <SubmitComment>{obj[lang].enterHealthData}</SubmitComment>
          <InputBundle>
            <InputLine>
              <InputTitle>{obj[lang].name}</InputTitle>
              <Input
                $error={touched.name && errors.name}
                onChange={onChangeSubmitData}
                onBlur={() => handleBlur("name")}
                name={"name"}
                value={submitData.name ?? ""}
              />
            </InputLine>
            {touched.name && errors.name && (
              <ErrorMsg>{obj[lang].nameError}</ErrorMsg>
            )}
            <InputLine>
              <InputTitle>{obj[lang].birth}</InputTitle>
              <Input
                $error={touched.birth && errors.birth}
                onChange={onChangeSubmitData}
                onBlur={() => handleBlur("birth")}
                name={"birth"}
                value={submitData.birth ?? ""}
              />
            </InputLine>
            {touched.birth && errors.birth && (
              <ErrorMsg>{obj[lang].birthError}</ErrorMsg>
            )}
            <InputLine>
              <InputTitle>{obj[lang].email}</InputTitle>
              <Input
                $error={touched.email && errors.email}
                onChange={onChangeSubmitData}
                onBlur={() => handleBlur("email")}
                name={"email"}
                value={submitData.email ?? ""}
              />
            </InputLine>
            {touched.email && errors.email && (
              <ErrorMsg>{obj[lang].emailError}</ErrorMsg>
            )}
            <InputLine>
              <InputTitle>{obj[lang].phone}</InputTitle>
              <Input
                $error={touched.phone && errors.phone}
                onChange={onChangeSubmitData}
                onBlur={() => handleBlur("phone")}
                name={"phone"}
                value={submitData.phone ?? ""}
              />
            </InputLine>
            {touched.phone && errors.phone && (
              <ErrorMsg>{obj[lang].phoneError}</ErrorMsg>
            )}
            <InputLine>
              <InputTitle>{obj[lang].gender}</InputTitle>
              <LabelContainer>
                <InputLabel>
                  <Input
                    $error={touched.gender && errors.gender}
                    name={"gender"}
                    type="radio"
                    value={"Male"}
                    checked={submitData.gender === "Male"}
                    onChange={onChangeSubmitData}
                    onBlur={() => handleBlur("gender")}
                  />
                  {obj[lang].male}
                </InputLabel>
                <InputLabel>
                  <Input
                    $error={touched.gender && errors.gender}
                    name={"gender"}
                    type="radio"
                    value={"Female"}
                    checked={submitData.gender === "Female"}
                    onChange={onChangeSubmitData}
                    onBlur={() => handleBlur("gender")}
                  />
                  {obj[lang].female}
                </InputLabel>
              </LabelContainer>
            </InputLine>
            {touched.gender && errors.gender && (
              <ErrorMsg>{obj[lang].genderError}</ErrorMsg>
            )}
            <InputLine>
              <InputTitle>{obj[lang].height}</InputTitle>
              <Input
                $error={touched.height && errors.height}
                onChange={onChangeSubmitData}
                onBlur={() => handleBlur("height")}
                name={"height"}
                value={submitData.height ?? ""}
              />
              <Unit>cm</Unit>
            </InputLine>
            {touched.height && errors.height && (
              <ErrorMsg>{obj[lang].heightError}</ErrorMsg>
            )}
            <InputLine>
              <InputTitle>{obj[lang].weight}</InputTitle>
              <Input
                $error={touched.weight && errors.weight}
                onChange={onChangeSubmitData}
                onBlur={() => handleBlur("weight")}
                name={"weight"}
                value={submitData.weight ?? ""}
              />
              <Unit>kg</Unit>
            </InputLine>
            {touched.weight && errors.weight && (
              <ErrorMsg>{obj[lang].weightError}</ErrorMsg>
            )}
          </InputBundle>
          <ButtonContainer>
            <Button
              onClick={() =>
                isSubmitDisabled
                  ? setTouched({
                      name: true,
                      phone: true,
                      email: true,
                      birth: true,
                      gender: true,
                      height: true,
                      weight: true,
                    })
                  : setPhase(2)
              }
              $error={isSubmitDisabled}
            >
              {obj[lang].submit}
            </Button>
          </ButtonContainer>
        </SubmitContainer>
        <Comment>{obj[lang].comment}</Comment>
      </SubmitLayout>
    </SumbitWholeLayout>
  );
};

const SumbitWholeLayout = styled.section`
  position: relative;
  width: ${getRatioSize(1273)};
  margin: 0 auto;
`;

const SubmitComment = styled.p`
  word-break: keep-all;
  font-size: ${getRatioSize(20)};
  font-weight: 500;
  line-height: normal;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(13, true)};
`)}
`;

const InputBundle = styled.div`
  margin-top: 20px;
  display: grid;
`;

const InputLine = styled.div`
  margin-top: 25px;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 30% 60% 10%;

  ${getMediaQueryCSS(`
    grid-template-columns: 30% 50% 20%;

  `)}
`;

const InputTitle = styled.span`
  font-size: ${getRatioSize(24)};
  font-weight: 700;
  text-align: unset;
  ${getMediaQueryCSS(`
  font-size: ${getRatioSize(10, true)};
  text-align: right;
  `)}
`;

const LabelContainer = styled.div`
  display: flex;
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: ${getRatioSize(20)};
  font-weight: 400;
  line-height: normal;
  color: #5e5e5e;
  gap: 3px;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(10, true)};
  `)}
`;

const Input = styled.input<{ $error?: boolean }>`
  padding: 10px;
  margin-left: 20px;
  margin-right: 5px;
  height: ${getRatioSize(45)};
  border: ${({ $error }) => ($error ? "solid 1px red" : "none")};
  background-color: #ebebeb;
  border-radius: 3px;
  font-size: ${getRatioSize(20)};
  ${getMediaQueryCSS(`
    height: ${getRatioSize(25, true)};
    margin-left: 10px;
    margin-right: 5px;
    font-size: ${getRatioSize(12, true)};
  `)}
`;

const Unit = styled.span`
  width: 10px;
  font-size: ${getRatioSize(20)};
  font-weight: 400;
  line-height: normal;
  color: ${Colors.Grey};
  ${getMediaQueryCSS(`
  font-size: ${getRatioSize(13, true)};
  `)}
`;

const SubmitContainer = styled.div<{ $fadeIn?: boolean }>`
  opacity: ${({ $fadeIn }) => (!$fadeIn ? 1 : 0)};
  padding: ${getRatioSize(40)} 0 ${getRatioSize(10)};
  width: ${getRatioSize(1273)};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ $fadeIn }) => (!$fadeIn ? "unset" : 0)};
  width: ${({ $fadeIn }) => (!$fadeIn ? "unset" : 0)};
  overflow: hidden;
  transition: opacity 0.5s ease, height 0.5s ease, width 0.5s ease;
`;

const ConnectContainer = styled.div<{ $fadeIn?: boolean }>`
  height: ${({ $fadeIn }) => (!$fadeIn ? "unset" : 0)};
  width: ${({ $fadeIn }) => (!$fadeIn ? getRatioSize(600) : 0)};
  opacity: ${({ $fadeIn }) => (!$fadeIn ? 1 : 0)};
  overflow: hidden;
  transition: opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: ${({ $fadeIn }) => (!$fadeIn ? "80px 0 0" : 0)};

  ${({ $fadeIn }) =>
    getMediaQueryCSS(`
      padding: ${!$fadeIn ? "80px 0 0" : 0};
      width: 100%;
  `)}
`;

const SubmitLayout = styled.div<{ $fadeIn?: boolean }>`
  background: rgba(217, 217, 217, 0.1);
  backdrop-filter: blur(17.5px);
  padding: 0 0 10px;

  border: 1.5px solid ${Colors.White};
  border-radius: 10px;

  z-index: 1;
  ${getMediaQueryCSS(`
    padding: ${getRatioSize(20, true)} ${getRatioSize(18, true)} ${getRatioSize(
    10,
    true
  )};
  `)};
`;

const EllipseRight = styled.img`
  position: absolute;
  right: -14.5px;
  top: -14.5px;
  width: 35px;
`;

const EllipseLeft = styled.img`
  position: absolute;
  left: -14.5px;
  bottom: -14.5px;
  width: 35px;
`;

const Comment = styled.p`
  color: #7e7e7e;
  text-align: center;
  font-size: ${getRatioSize(14)};
  font-weight: 300;
  line-height: normal;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(10, true)};
  `)}
`;

const ButtonContainer = styled.div`
  padding: 20px 0;
`;

const Button = styled.button<{ $error?: boolean }>`
  cursor: pointer;
  border-radius: 25px;
  background: ${({ $error }) =>
    $error
      ? "linear-gradient(180deg, #c4c4c4 0%, #c4c4c4 100%)"
      : "linear-gradient(180deg, #064567 0%, #e71139 100%)"};
  padding: 4px 12px;
  color: ${Colors.White};
  font-size: ${getRatioSize(20)};
  font-weight: 700;
  line-height: normal;

  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(10, true)};
    font-weight: 400;
  `)}
`;

const CompleteContainer = styled.div<{ $fadeIn?: boolean }>`
  height: ${({ $fadeIn }) => (!$fadeIn ? "unset" : 0)};
  width: ${({ $fadeIn }) => (!$fadeIn ? getRatioSize(600) : 0)};
  opacity: ${({ $fadeIn }) => (!$fadeIn ? 1 : 0)};
  overflow: hidden;
  transition: opacity 0.5s ease, height 0.5s ease;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: ${({ $fadeIn }) => (!$fadeIn ? "160px 0" : 0)};

  ${({ $fadeIn }) =>
    getMediaQueryCSS(`
    padding: ${!$fadeIn ? "40px 0 0" : 0};
    width: 100%;
  `)}
`;

const CheckImg = styled.img`
  margin-bottom: 15px;
`;

const CompleteComment = styled.p`
  font-size: ${getRatioSize(30)};
  font-weight: 700;
  line-height: 1.8;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(16, true)};
    font-weight: 400;
    text-align: center;
    line-height: 1.25;
`)}
`;

const ErrorMsg = styled.span`
  color: red;
  font-size: ${getRatioSize(20)};
  margin-top: 5px;
  text-align: unset;
  ${getMediaQueryCSS(`
    font-size: ${getRatioSize(8, true)};
    text-align: center;
  `)}
`;

export default Submit;

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ThreeDotOption = ({ title }: { title: string }) => {
  return (
    <li>
      <p>{title}</p>
      <p>
        <KeyboardArrowRightIcon />
      </p>
    </li>
  );
};

export default ThreeDotOption;

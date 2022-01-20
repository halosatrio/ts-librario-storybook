import Button from "../Button";

const IconText = (props: { className?: string }) => {
  const classNames = ["brand-text-icon", props.className];

  return (
    <Button className={classNames.join(" ")} href="/" type="link">
      Librario
    </Button>
  );
};

export default IconText;

type TitleTextProps = {
  className?: string;
  isBold?: boolean;
  children: React.ReactNode;
};

const TitleText = ({ className, isBold, children }: TitleTextProps) => {
  let classNames = [className];
  if (isBold) classNames.push("fw-bold");

  return (
    <div className="container text-center">
      <h1 className={classNames.join(" ")} style={{ marginBottom: 60 }}>
        {children}
      </h1>
    </div>
  );
};

export default TitleText;

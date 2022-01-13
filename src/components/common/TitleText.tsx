const TitleText = (
  className: string,
  isBold: boolean,
  children: React.ReactNode
) => {
  let classNames = [className];
  if (isBold) classNames.push("font-weight-bold");

  return (
    <div className="container text-center">
      <h1 className={classNames.join(" ")} style={{ marginBottom: 60 }}>
        {children}
      </h1>
    </div>
  );
};

export default TitleText;

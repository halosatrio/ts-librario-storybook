import ButtonLink from "../ButtonLink";

type BreadcrumbData = {
  pageTitle: string;
  pageHref: string;
};

const Breadcrumb = ({ data }: { data: Array<BreadcrumbData> }) => {
  return (
    <div className="container my-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent">
          {data.map((item, index) => {
            return (
              <li
                key={`breadcrumb-${index}`}
                className={`breadcrumb-item${
                  index === data.length - 1 ? " active" : ""
                }`}
              >
                {index === data.length - 1 ? (
                  item.pageTitle
                ) : (
                  <ButtonLink to={item.pageHref}>{item.pageTitle}</ButtonLink>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;

import { useRouter } from "next/router";

export const Breadcrumbs = () => {
  const router = useRouter();

  console.log("breadcrumb", router);

  const createBreadcrumbs = () => {
    const route = router.asPath;
    const splitRoute = route.split("/").filter(Boolean);
    console.log(splitRoute);
  };

  // useEffect(() => {
  //   createBreadcrumbs();
  // }, []);

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dicta.
      </p>
    </div>
  );
};

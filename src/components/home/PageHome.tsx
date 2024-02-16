import { useAppSelector } from "@/store/hook";

const PageHome: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  return (
    <div>
      <h1>Hello {user.email}</h1>
    </div>
  );
};

export default PageHome;

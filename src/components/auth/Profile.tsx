export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  return <div>Private pfofile components. Name is {name}</div>;
};

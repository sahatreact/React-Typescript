type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome {props.name}, you have 10 unread message</h2>
    </div>
  );
};

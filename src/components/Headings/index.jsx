import classes from "./headings.module.scss";

export const H1 = ({ children, className, ...rest }) => {
  return (
    <h1 className={`${classes.heading} ${className}`} {...rest}>
      {children}
    </h1>
  );
};

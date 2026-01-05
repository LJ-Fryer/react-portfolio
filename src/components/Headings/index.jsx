import classes from "./headings.module.scss";

export const H1 = ({ children, className, ...rest }) => {
  return (
    <h1 className={`${classes.h1} ${className}`} {...rest}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...rest }) => {
  return (
    <h2 className={`${classes.h2} ${className}`} {...rest}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...rest }) => {
  return (
    <h3 className={`${classes.h3} ${className}`} {...rest}>
      {children}
    </h3>
  );
};

export const P = ({ children, className, ...rest }) => {
  return (
    <p className={`${classes.para} ${className}`} {...rest}>
      {children}
    </p>
  );
};

import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import location from "./location.svg";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    width: "100%",
    height: "100%",
    // marginTop: '5%',
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: "100%",
    // marginLeft: '5%',
    // marginRight: 'auto',
    overflow: "initial",
    background: "#f8c9d4",
    display: "flex",
    flexDirection: "column",
    // alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },

  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

export const Map1 = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardContent>
        <a href="/map">
          <h1 style={{ color: "#ffffff", margin: 0 }}>
            Go To <br /> Pad SOS
          </h1>
        </a>
        <img height={100} src={location} />
      </CardContent>
    </Card>
  );
});

export default Map1;

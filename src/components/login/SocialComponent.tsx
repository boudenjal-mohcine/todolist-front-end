import { FunctionComponent } from "react";

interface SocialProps {}

const Social: FunctionComponent<SocialProps> = () => {
  return (
    <div className="social">
      <div className="go">
        <i className="fab fa-google"></i> Google
      </div>
      <div className="fb">
        <i className="fab fa-facebook"></i> Facebook
      </div>
    </div>
  );
};

export default Social;

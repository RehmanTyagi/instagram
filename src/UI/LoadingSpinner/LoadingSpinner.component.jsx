import style from './LoadingSpinner.module.css';

const LazzyLoader = ({ children }) => {
    return <div>{children}</div>;
};

const LoadingSpinner = () => {
    return <div className={style.spinnerBox}><div className={style.spinner}></div></div>;
};
const LargeLoadingSpinner = () => {
    return <div className={style.largeSpinnerBox}><div className={style.spinner}></div></div>;
};

const BackDrop = () => {
    return <div className={style.backDrop}> </div>;
};

LazzyLoader.LoadingSpinner = LoadingSpinner;
LazzyLoader.LargeLoadingSpinner = LargeLoadingSpinner;
LazzyLoader.BackDrop = BackDrop;

export default LazzyLoader;;

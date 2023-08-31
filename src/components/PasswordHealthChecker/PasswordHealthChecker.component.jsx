import styles from './PasswordHealthChecker.module.css'
import zxcvbn from 'zxcvbn'
export default function PasswordHealthChecker({ password }) {
    const testResults = zxcvbn(password);
    const strengthScore = testResults.score * 100 / 4;
    let strengthMessage = 'password is weak'

    const strengthColorHandler = (score) => {
        console.log(testResults)
        switch (score) {
            case 1: return "red"
            case 2: strengthMessage = "password seems ok"; return "#fb8500"
            case 3: strengthMessage = "password is strong"; return "#7ae582"
            case 4: strengthMessage = "very strong password"; return "var(--themeColor)"
            default: return "none"
        }

    }

    const IndicatorStyleHandler = () => {
        return {
            width: `${strengthScore}%`,
            backgroundColor: `${strengthColorHandler(testResults.score)}`,
            height: "100%",
            borderRadius: "10px",
            transition: "0.5s ease-in-out"
        }
    }

    return (
        <div style={{ height: "5px", margin: "0 0 1rem 0" }}>
            <div className={styles.indicator} style={IndicatorStyleHandler()}></div>
            <p className={styles.strengthMessage}>{strengthMessage}</p>
        </div>
    )
}

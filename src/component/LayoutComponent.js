import useWindowWidth from "../Hook/useWindowWidth";

export default function LayoutComponentOne() {
    const onSmallScreen = useWindowWidth(600);
    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small': 'big'} device</h1>
        </div>
    )
}
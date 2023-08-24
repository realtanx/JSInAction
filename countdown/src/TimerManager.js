import Timer from "./Timer";

function TimerManager() {
    return (
        <div className="timers">
            <Timer startTime={300}></Timer>
        </div>
    );
}

export default TimerManager;
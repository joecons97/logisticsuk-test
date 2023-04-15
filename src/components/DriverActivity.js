import './DriverActivity.css';
const daysOfTheWeek = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun"
]

//Returns an array of actity type and activity duration
function GetTotalActivityDuration(traces){
    let output = {
        "drive": {
            type: "drive"
        },
        "work": {
            type: "work"
        },
        "available": {
            type: "available"
        },
        "rest": {
            type: "rest"
        },
    };

    //Build up total activity by activity type
    traces.forEach((trace) => {
        trace.activity.forEach((activity) => {
            const existingMinutes = output[activity.type].minutes || 0;
            output[activity.type] = {
                type: activity.type,
                minutes: existingMinutes + activity.duration
            }
        });
    });

    //Convert dictionary to array for use in jsx below
    return Object.values(output);
}

//Returns an array that stores all of the days of the week (represented as indices) that a driver's trace has stored
function GetActiveDays(traces){
    let activeDays = [];
    traces.forEach((trace) => {
        const date = new Date(trace.date);
        activeDays.push(date.getDay());
    });

    return activeDays;
}

const DriverActivity = (props) => {
    const activeDays = GetActiveDays(props.driver.traces);
    return (
        <div className='driver-actity-row'>
            <h3>{`${props.driver.forename} ${props.driver.surname}`}</h3>
            <h3>{props.driver.vehicleRegistration}</h3>
            <div className='minutes-container'>
            {
                GetTotalActivityDuration(props.driver.traces).map((minutes, i) => {
                  return (
                    <div key={i} className='minutes'>
                        <a>{minutes.type}</a>
                        <a>{`${minutes.minutes || 0}`} mins</a>
                    </div>
                  )  
                })
            }
            </div>
            <div className='activity-container'>
            {
                //Can't do proper for loops in jsx
                [...Array(7)].map((x, i) => {
                    const c = activeDays.includes(i) ? "day-active" : "day-inactive";
                    return (
                        <div key={i} className='activity'>
                            <a>{daysOfTheWeek[i]}</a>
                            <div className={c}>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default DriverActivity;
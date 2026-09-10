import "./ProgramDay.css";

export default function ProgramDay({ stages }) {
  return (
    <div className="program-day">
      {stages.map((stage) => (
        <section key={stage.name} className="program-day__stage">
          <h3 className="display program-day__stage-name">{stage.name}</h3>
          <div className="program-day__days">
            {stage.days.map((day) => (
              <div key={day.day} className="program-day__day">
                <p className="meta">{day.day}</p>
                <ul>
                  {day.slots.map((slot) => (
                    <li key={`${day.day}-${slot.time}`}>
                      <span>{slot.time}</span>
                      <strong>{slot.artist}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

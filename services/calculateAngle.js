const calculateAngle = (time) => {
    const [hour, minute] = time.split(':').map(str => parseInt(str, 10));
    const h = hour >= 12 ? hour - 12 : hour;

    const angleMinute = (minute / 60) * 360;
    const angleHour = (h / 12) * 360 + angleMinute / 12;

    const angle = Math.abs(angleHour - angleMinute);
    const finalAngle = angle > 180 ? 360 - angle : angle;
    return Math.round(finalAngle);
};

module.exports = {calculateAngle};
const firstBadVersion = isBad => {
    return version => {
        if (!isBad(version)) {
            return -1;
        } else {
            let i = 0;
            while (!isBad(i)) {
                i++;
            }

            return i;
        }
    };
};

module.exports = {firstBadVersion};

console.log(firstBadVersion((i) => i >= 4)(100));
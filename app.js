const settings = {
  notifications: {
    follow: true,
    alerts: true,
    unfolow: false,
  },
  color: {
    theme: "dark",
  },
};

const {
  notifications: { follow = false }, // default
  color,
} = settings;

console.log(follow);
console.log(color);

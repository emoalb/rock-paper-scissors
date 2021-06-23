let subscriptions = {};

const observer = {
    subscribeEvent: (eventName, ev) => {
        if (!subscriptions[eventName]) {
            subscriptions[eventName] = [];
        }
        subscriptions[eventName].push(ev);
    },
    unSubscribeEvent: (eventName, ev) => {
        if (subscriptions[eventName]) {
         subscriptions[eventName].pop();
        }
    },
    triggerEvent: (eventName, eventParams) => {
        console.log(subscriptions[eventName])

        subscriptions[eventName].forEach(ev => ev(eventParams));
    }
}
export default observer
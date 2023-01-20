/*
* @template {Subscribe<T>} T - The type of the value that is emitted by the Observable.
* */
export type Subscriber<T> = (value: T) => void;

/*
* To create an observable, we need to create a function that will return a function that will allow us to subscribe to the observable.
* This function will be called by the subscriber, and will return a function that will allow the subscriber to unsubscribe.
* @template {T} The type of the value that will be passed to the subscriber.
* */
export function createObservable<T>() {

    /*
    * This is the observable set of subscribers.
    * */
    const subscribers: Set<Subscriber<T>> = new Set();

    return {

        /*
        * @template {Subscriber<T>} subscriber - Attach subscriber to the observable.
        * @returns A function that can be called to unsubscribe the subscriber.
        * */
        subscribe(subscriber: Subscriber<T>) {
            subscribers.add(subscriber);

            return () => {
                subscribers.delete(subscriber);
            }
        },

        /*
        * @param value - The value to be passed to the subscribers
        * @template {T} value - The type of the value to be passed to the subscribers
        * */
        next(value: T) {
            subscribers.forEach(subscriber => subscriber(value));
        }
    }
}

import {useEffect, useState} from "react";
import {createObservable} from "../../internal";


/*
* @template {T} initialValue -  The initial state of the store
* Returns a stateful value, and a function to update it
* */
export function defineStore<T>(initialValue: T) {
    const subscribers = createObservable<T>()

    return () => {
        const [value, setValue] = useState<T>(initialValue)

        useEffect(() => subscribers.subscribe(setValue), [])

        return [
            value,
            (value: T) => {
                subscribers.next(value)
            }
        ] as const
    }
}
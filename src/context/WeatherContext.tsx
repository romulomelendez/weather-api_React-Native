import { useState, createContext, ReactNode } from 'react'

const initialValues = {

    city: '',
    controlVariable: 0,
    setControlVariable: () => {},
    setCity: () => {}

}

type WeatherContextProps = {

    city: string,
    controlVariable: number,
    setCity: ( newState: string ) => void,
    setControlVariable: ( newState: number ) => void,

}

type WeatherProps = {

    children: ReactNode

}

export const WeatherContext = createContext<WeatherContextProps>(initialValues)

export const WeatherProvider = ({ children }: WeatherProps) => {
    
    const [ city, setCity ] = useState(initialValues.city)
    const [ controlVariable, setControlVariable ] = useState(0)

    return (

        <WeatherContext.Provider value={{ city, setCity, controlVariable, setControlVariable }}>
    
            { children }

        </WeatherContext.Provider>

    )

}
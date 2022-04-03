import { useState, createContext, ReactNode } from 'react'

const initalValues = {

    city: '',
    setCity: () => {}

}

type WeatherContextProps = {

    city: string,
    setCity: ( newState: string ) => void
}

type WeatherProps = {

    children: ReactNode

}

export const WeatherContext = createContext<WeatherContextProps>(initalValues)

export const WeatherProvider = ({ children }: WeatherProps) => {
    
    const [ city, setCity ] = useState(initalValues.city)

    return (

        <WeatherContext.Provider value={{ city, setCity }}>
    
            { children }

        </WeatherContext.Provider>

    )

}
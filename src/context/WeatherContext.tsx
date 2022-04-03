import { useState, createContext, ReactNode } from 'react'

const initialValues = {

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

export const WeatherContext = createContext<WeatherContextProps>(initialValues)

export const WeatherProvider = ({ children }: WeatherProps) => {
    
    const [ city, setCity ] = useState(initialValues.city)

    return (

        <WeatherContext.Provider value={{ city, setCity }}>
    
            { children }

        </WeatherContext.Provider>

    )

}
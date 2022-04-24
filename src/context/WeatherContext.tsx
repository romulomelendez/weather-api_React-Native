import { useState, createContext, ReactNode } from 'react'

const initialValues = {

    city: '',
    controlVariable: 0,
    weatherData: undefined,
    currentyTemperature: 0,
    currentyUnit: '°K',
    minMax: {},
    setControlVariable: () => {},
    setCity: () => {},
    setWeatherData: () => {},
    setCurrentyTemperature: () => {},
    setCurrentyUnit: () => {},
    setMinMax: () => {},

}

type WeatherContextProps = {

    city: string,
    controlVariable: number,
    weatherData?: WeatherDataProps,
    currentyTemperature?: number,
    currentyUnit?: string,
    minMax?: minMaxProps,
    setCity: ( newState: string ) => void,
    setControlVariable: ( newState: number ) => void,
    setWeatherData: ( newState: WeatherDataProps ) => void,
    setCurrentyTemperature: ( newState: number ) => void,
    setCurrentyUnit: ( newState: string ) => void,
    setMinMax: ( newState: minMaxProps ) => void,
}

type WeatherProps = {

    children: ReactNode

}
type minMaxProps = {

    min_temperature?: number,
    max_temperature?: number

}
interface WeatherDataProps {

    id: number,
    name: string,
    main: string,
    description: string,
    icon: string,
    temperature: number,
    feels_like: number,
    temp_max: number,
    temp_min:number,
    pressure: number,
    humidity: number

}

export const WeatherContext = createContext<WeatherContextProps>(initialValues)

export const WeatherProvider = ({ children }: WeatherProps) => {
    
    const [ city, setCity ] = useState(initialValues.city)
    const [ controlVariable, setControlVariable ] = useState(initialValues.controlVariable)
    const [ weatherData, setWeatherData ] = useState<WeatherDataProps>()
    const [ currentyTemperature, setCurrentyTemperature ] = useState<number>(initialValues.currentyTemperature)
    const [ currentyUnit, setCurrentyUnit ] = useState<string>(initialValues.currentyUnit)
    const [ minMax, setMinMax ] = useState<minMaxProps>(initialValues.minMax)

    return (

        <WeatherContext.Provider value={{

            city,
            setCity,
            controlVariable,
            setControlVariable,
            weatherData,
            setWeatherData,
            currentyTemperature,
            setCurrentyTemperature,
            currentyUnit,
            setCurrentyUnit,
            minMax,
            setMinMax

        }}>
    
            { children }

        </WeatherContext.Provider>

    )

}
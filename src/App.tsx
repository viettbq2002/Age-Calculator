import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./App.css";
import Input from "./components/Input";
import { ageSchema, birth } from "./schema/age";
import { calculateAge } from "./utils/date";
import { useEffect, useState } from "react";
import { isEmpty } from "lodash";
function App() {
  const today = new Date();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<birth>({
    resolver: yupResolver(ageSchema),
  });
  const [age, setAge] = useState<birth | null>(null);
  const onSubmit = (data: birth) => {
    const calculatedAge = calculateAge(data);
    setAge(calculatedAge);
  };
  const [date, month, year] = watch(["date", "month", "year"]);
  useEffect(() => {
    if (isEmpty(date) || isEmpty(month) || isEmpty(year)) {
      setAge(null);
    }
  }, [date, month, year]);

  return (
    <div className="min-h-screen bg-neutral-lightGrey flex justify-center  gap-0 items-center  ">
      <form onSubmit={handleSubmit(onSubmit)} className="container-md md:container lg:max-w-3xl ">
        <div className="bg-white rounded-3xl rounded-br-[175px] p-12  mx-5  ">
          <div className="flex flex-row gap-8">
            <Input
              error={errors.date?.message}
              {...register("date")}
              type="number"
              label="DAY "
              placeholder="DD"
              className="w-[100px] md:w-[150px] "
            />
            <Input
              error={errors.month?.message}
              {...register("month")}
              type="number"
              label="MONTH"
              placeholder="MM"
              className="w-[100px] md:w-[150px] "
            />
            <Input
              error={errors.year?.message}
              {...register("year")}
              type="number"
              label="YEAR"
              placeholder="YYYY"
              className="w-[100px] md:w-[150px] "
            />
          </div>
          <div className="flex items-center my-4  ">
            <hr className="flex-grow border-t border-gray-300" />
            <button
              type="submit"
              className="md:w-24 md:h-24 w-16 h-16 bg-primary-default hover:bg-black transition-colors duration-200 rounded-full flex items-center justify-center  lg:ml-auto lg:mr-0"
            >
              <img src="assets/images/icon-arrow.svg" alt="arrow" />
            </button>
            <hr className="flex-grow border-t md:hidden  border-gray-300" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center ">
              {age === null ? (
                <>
                  <div className="text-6xl font-extraBoldItalic text-primary-default">-</div>
                  <div className="text-6xl mr-4 font-extraBoldItalic text-primary-default">-</div>
                </>
              ) : (
                <div className="text-6xl font-extraBoldItalic italic mr-4 text-primary-default">{age.year}</div>
              )}
              <h1 className="text-6xl font-extraBoldItalic  italic">Years</h1>
            </div>
            <div className="flex items-center ">
              {age === null ? (
                <>
                  <div className="text-6xl font-extraBoldItalic text-primary-default">-</div>
                  <div className="text-6xl mr-4 font-extraBoldItalic text-primary-default">-</div>
                </>
              ) : (
                <div className="text-6xl font-extraBoldItalic italic mr-4 text-primary-default">{age.month}</div>
              )}
              <h1 className="text-6xl font-extraBoldItalic  italic">Months</h1>
            </div>
            <div className="flex items-center ">
              {age === null ? (
                <>
                  <div className="text-6xl font-extraBoldItalic text-primary-default">-</div>
                  <div className="text-6xl mr-4 font-extraBoldItalic  text-primary-default">-</div>
                </>
              ) : (
                <div className="text-6xl font-extraBoldItalic italic mr-4 text-primary-default">{age.date}</div>
              )}
              <h1 className="text-6xl font-extraBoldItalic  italic">Days</h1>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;

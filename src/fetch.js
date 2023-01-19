import { useEffect, useState } from "react";
import axios from "axios";
import Course from "./course";

const Fetch = () => {
  const [courses, setCourses] = useState([]);

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiYzkzNWFhMjgwMWRmOTYyZWE2MjM2YmM1YTRlYTgwNTMwZjNiMTVjZGY0MmFmZDI0ZTUyMjY1ZDg3NjZhMjIzOGQ2NTk1MDZmOTJkNjg2ZjgiLCJpYXQiOjE2Njk3MDAyOTYsIm5iZiI6MTY2OTcwMDI5NiwiZXhwIjoxNzAxMjM2Mjk2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.JQaOXjD65py7krXAjArgPZXw8xnvy-M6qQEE6b8sN64lBtOMfRjDdesU6NF2IKy-SLz4rmEYIKBLyE-DWvITtw367UD1_zwqb5oJcb1b84r_Yz2sQCrHHh_GQJgyh8gjRJis-I-k2EoiSvcwgt1CDj1EMXZ80P8-2EyjdT0jP6Fh-P4GzHTyfbvHe2pCyY7T-TgAyl5s7cPqXQkJJLT2cs-U8ilRI97LugDWJ-4S_3IMllm7pNhp49R5C-s-VpY_3zIHujbQPfn6XY74zkNi_WewmJOC82WbM_xczG8_mzq4VKcV-gpIPyla2hAUWRC9KGd32tcFYvt6BurIM_c-hLjZGnMiZi3MFrE-YJsnjx0pFSLt40xJWhkW6NbqIruUxB3RmNZcevRdXrX5E_zuQGhP2d5_7uIOY8CCRKIWp4yZaA7Ca8HLkrgtJ8bwRPKe4UVHk2wrVrFfMi15HSHnF42Ka5eldoMoEtcIG38Q79nm3LyJDprpQa0N3jg_Dm-UFWoEpf22mtNI94Rta3S9PznoUjpAdythggiHoJxfPPJkwKXXr5QIk-hTocVRkQcTEFe2NfmTnvz6CUnspGYkJ-XHHSyaVIgX1-rnW6zEkHd2RWfN52BRoCt1HTvO9or1VxtqUX6Ikoy6LHvI1vNzw0nW5LCBIx-73lVpV-Npz8Q";

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const getCourse = async () => {
      const { data } =  await axios.get(
        "http://localhost/elearn/elearn/api/v1/course",
        axiosConfig
      );
      setCourses(data.data);
    };
    getCourse();
  }, []);


  return (
    <div>
      {courses
            ?
            <Course courses={courses} />
        
        : ""}
    </div>
  );
};

export default Fetch;

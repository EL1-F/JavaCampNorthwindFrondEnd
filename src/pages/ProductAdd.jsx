import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  Button  } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControl/KodlamaIoTextInput";

export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: "" };
  const shema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunludur"),
    unitPrice: Yup.number().required("Ürü fiyatı zorunludur"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={shema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
            <KodlamaIoTextInput name="productName" placeholder="Ürün Adı"/>
            <KodlamaIoTextInput name="unitPrice" placeholder="Ürün Fiyatı"/>
          {/* <FormField>
            <Field name="productName" placeholder="Ürün Adı"></Field>
            <ErrorMessage
              name="productName"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> */}


          {/* <FormField>
            <Field name="unitPrice" placeholder="Ürün Fiyatı"></Field>
            <ErrorMessage
              name="unitPrice"
              render={(error) => (
                <Label pointing basic color="red" content={error}></Label>
              )}
            ></ErrorMessage>
          </FormField> */}
          <Button color="green" type="submit">
            Ekle{" "}
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

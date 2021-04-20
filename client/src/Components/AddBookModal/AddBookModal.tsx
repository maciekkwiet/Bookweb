import { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { BigLabel } from '../BigLabel/BigLabel';
import { Button } from '../Button/Button';
import {
  Flex,
  TitleWrapper,
  Wrapper,
  BookInfo,
  Form,
  InputWrapper,
  Input,
  Label,
  BookImage,
  AddImageInput,
  Image,
  BookDescription,
  ButtonWrapper,
  AddImageLabel,
} from './AddBookModalStyles';
// import { useFormik } from 'formik'

export const AddBookModal = ({ showModal, setShowModal, children }) => {
  const [image, setImage] = useState<File | null>();
  const [preview, setPreview] = useState<string | null>();
  const [values, setValues] = useState({
    isbn: 0,
    title: '',
    name: '',
    surname: '',
    publisher_name: '',
    num_pages: 0,
    release_date: new Date(),
    description: '',
    cover: File,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setImage(file);
      // setValues({
      //   ...values,
      //   cover: file
      // });
    }
  };

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  // const {getFieldProps, handleSubmit} = useFormik({
  //   initialValues: {
  //     isbn: "",
  //     title: "",
  //     name: "",
  //     surname: "",
  //     publisher_name: "",
  //     num_pages: "",
  //     release_date: "",
  //     description: "",
  //     cover: ""
  //   },
  //   onSubmit(values) {
  //     return values;
  //   }
  // })

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <Flex>
        <TitleWrapper>
          <BigLabel title={'Dodaj nową książkę'}></BigLabel>
        </TitleWrapper>
        <Wrapper>
          <BookInfo>
            <Form>
              <InputWrapper>
                <Label htmlFor="isbn">ISBN</Label>
                <Input
                  id="isbn"
                  type="number"
                  name="isbn"
                  value={values.isbn}
                  onChange={handleChange}
                  placeholder="ISBN"
                  // {...getFieldProps("isbn")}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="title">Tytuł książki</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  placeholder="Tytuł książki"
                  // {...getFieldProps("title")}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="authorName">Imię autora</Label>
                <Input
                  id="authorName"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Imię autora"
                  // {...getFieldProps("name")}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="authorSurname">Nazwisko autora</Label>
                <Input
                  id="authorSurname"
                  type="text"
                  name="surname"
                  value={values.surname}
                  onChange={handleChange}
                  placeholder="Nazwisko autora"
                  // {...getFieldProps("surname")}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="publisher">Wydawnictwo</Label>
                <Input
                  id="publisher"
                  type="text"
                  name="publisher_name"
                  value={values.publisher_name}
                  onChange={handleChange}
                  placeholder="Wydawnictwo"
                  // {...getFieldProps("publisher_name")}
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="pages">Liczba stron</Label>
                <Input
                  id="pages"
                  type="number"
                  name="num_pages"
                  value={values.num_pages}
                  onChange={handleChange}
                  placeholder="Liczba stron"
                  // {...getFieldProps("num_pages")}
                  required
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="date">Data wydania</Label>
                <Input
                  id="date"
                  type="date"
                  name="release_date"
                  onChange={handleChange}
                  placeholder="Data wydania"
                  // {...getFieldProps("release_date")}
                  required
                />
              </InputWrapper>
            </Form>
          </BookInfo>
          <BookImage>
            {preview ? (
              <Image
                src={preview}
                onClick={() => {
                  setImage(null);
                }}
              />
            ) : (
              <AddImageLabel htmlFor="addImage">Add Image</AddImageLabel>
            )}
            <AddImageInput name="cover" id="addImage" type="file" accept="image/*" onChange={handleImage} />
          </BookImage>
        </Wrapper>
        <BookDescription
          name="description"
          placeholder={'Opis książki'}
          value={values.description}
          onChange={handleChange}
          // {...getFieldProps("description")}
        />
        <ButtonWrapper>
          <Button type="submit" onClick={() => console.log(values)}>
            Opublikuj
          </Button>
        </ButtonWrapper>
      </Flex>
    </Modal>
  );
};

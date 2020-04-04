import { Formik, Form, Field } from 'formik';
import gql from 'graphql-tag';
import React from 'react';
import { withApollo } from '../src/lib/apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';

const MOVIES_QUERY = gql`
  query MoviesQuery {
    movies {
      movieName
      director
      yearReleased
    }
  }
`;
const CREATE_MOVIE_MUTATION = gql`
  mutation CreateMovieMutation($director: String!, $yearReleased: Int!, $movieName: String!) {
    createOneMovie(
      data: { director: $director, yearReleased: $yearReleased, movieName: $movieName }
    ) {
      movieName
    }
  }
`;

const Index = () => {
  const { data } = useQuery(MOVIES_QUERY);
  const [createMovie] = useMutation(CREATE_MOVIE_MUTATION);

  return (
    <>
      {data?.movies.map((movie: any) => (
        <div>
          <p>{movie.movieName}</p>
          <p>{movie.director}</p>
          <p>{movie.yearReleased}</p>
        </div>
      ))}
      <Formik
        initialValues={{
          director: '',
          movieName: '',
          yearReleased: '',
        }}
        onSubmit={(values: any) => {
          createMovie({ variables: { ...values, yearReleased: Number(values.yearReleased) } });
        }}
      >
        <Form>
          <label>
            Movie Name
            <Field name="movieName" type="text"></Field>
          </label>
          <label>
            Director
            <Field name="director" type="text"></Field>
          </label>
          <label>
            Year Released
            <Field name="yearReleased" type="text"></Field>
          </label>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
export default withApollo(Index);

import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  RadioField,
  TextField,
  Submit,
} from '@redwoodjs/forms'

import type { EditLogById, UpdateLogInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormLog = NonNullable<EditLogById['log']>

interface LogFormProps {
  log?: EditLogById['log']
  onSave: (data: UpdateLogInput, id?: FormLog['id']) => void
  error: RWGqlError
  loading: boolean
}

const LogForm = (props: LogFormProps) => {
  const onSubmit = (data: FormLog) => {
    props.onSave(data, props?.log?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormLog> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="activity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Activity
        </Label>

        <CheckboxField
          name="activity"
          defaultChecked={props.log?.activity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="activity" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="log-type-0"
            name="type"
            defaultValue="CashOnHand"
            defaultChecked={props.log?.type?.includes('CashOnHand')}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
          <div>Cashonhand</div>
        </div>

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>

        <TextField
          name="value"
          defaultValue={props.log?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />

        <FieldError name="value" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default LogForm

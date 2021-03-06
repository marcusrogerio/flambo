import React, { Component, PropTypes } from 'react'
import { FormattedMessage }            from 'react-intl'
import { Prompt }                      from 'react-router-dom'
import { Field }                       from 'redux-form'
import styled                          from 'styled-components'

import { Grid, Cell, Label }           from '../../../core/components/Grid'
import FormActions                     from '../../../core/components/form/FormActions'
import DropzoneInput                   from '../../../core/components/form/inputs/DropzoneInput'
import { FORM_NAME }                   from '../constants'


const Container = styled.div`
    box-shadow: 0 1px 2px rgba(0, 0, 0, .07);
`

export default class CollectionForm extends Component {
    static propTypes = {
        collection:      PropTypes.object,
        onSubmit:        PropTypes.func.isRequired,
        onCancel:        PropTypes.func.isRequired,
        change:          PropTypes.func.isRequired,
        dirty:           PropTypes.bool.isRequired,
        valid:           PropTypes.bool.isRequired,
        isSubmitting:    PropTypes.bool.isRequired,
        submitSucceeded: PropTypes.bool.isRequired,
        intl:            PropTypes.shape({ formatMessage: PropTypes.func.isRequired }).isRequired,
    }

    render() {
        const {
            onCancel,
            handleSubmit,
            valid,
            dirty,
            submitSucceeded,
            intl: { formatMessage },
        } = this.props

        return (
            <Container>
                <form onSubmit={handleSubmit} name={FORM_NAME}>
                    <Prompt
                        when={dirty && !submitSucceeded}
                        message={formatMessage({ id: 'form_cancel_message' })}
                    />
                    <Grid
                        xTemplate="1fr 1fr"
                        style={{ padding: 24 }}
                    >
                        <Cell>
                            <Label htmlFor="name">
                                <FormattedMessage id="name"/>
                            </Label>
                            <Field id="name" name="name" component="input" type="text"/>
                        </Cell>
                        <Cell>
                            <Label>
                                <FormattedMessage id="picture"/>
                            </Label>
                            <Field
                                name="picture"
                                component={DropzoneInput}
                                selectText="file_select_picture"
                            />
                        </Cell>
                        <Cell xSpan="2">
                            <Label htmlFor="description">
                                <FormattedMessage id="description"/>
                            </Label>
                            <Field name="description" component="textarea"/>
                        </Cell>
                        <Cell x="2" xAlign="end">
                            <FormActions
                                onSubmit={handleSubmit}
                                onCancel={onCancel}
                                submitDisabled={!valid}
                            />
                        </Cell>
                    </Grid>
                </form>
            </Container>
        )
    }
}

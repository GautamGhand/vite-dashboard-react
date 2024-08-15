import {
    Checkbox,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function AuthLogin() {
  const handleSubmit = () => {
    alert("dfdfdfdf");
  };

  const handleChange = () =>{

  }

  const [values,setValues] = useState([]);
  const [checked,setChecked] = useState(false);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="email-login">Email Address</InputLabel>
            <OutlinedInput
              id="email-login"
              type="email"
              value={values.email}
              name="email"
            //   onBlur={handleBlur}
              onChange={handleChange}
              placeholder="Enter email address"
              fullWidth
            //   error={Boolean(touched.email && errors.email)}
            />
          </Stack>
          {/* {touched.email && errors.email && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {errors.email}
            </FormHelperText>
          )} */}
        </Grid>
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="password-login">Password</InputLabel>
            <OutlinedInput
              fullWidth
            //   error={Boolean(touched.password && errors.password)}
              id="-password-login"
            //   type={showPassword ? "text" : "password"}
              value={values.password}
              name="password"
            //   onBlur={handleBlur}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                    color="secondary"
                  >
                    {/* {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />} */}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Enter password"
            />
          </Stack>
          {/* {touched.password && errors.password && (
            <FormHelperText
              error
              id="standard-weight-helper-text-password-login"
            >
              {errors.password}
            </FormHelperText>
          )} */}
        </Grid>

        <Grid item xs={12} sx={{ mt: -1 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={(event) => setChecked(event.target.checked)}
                  name="checked"
                  color="primary"
                  size="small"
                />
              }
              label={<Typography variant="h6">Keep me sign in</Typography>}
            />
            {/* <Link variant="h6" component={RouterLink} color="text.primary">
              Forgot Password?
            </Link> */}
          </Stack>
        </Grid>
        {/* {errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{errors.submit}</FormHelperText>
          </Grid>
        )} */}
        {/* <Grid item xs={12}>
          <AnimateButton>
            <Button
              disableElevation
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </AnimateButton>
        </Grid> */}
        <Grid item xs={12}>
          <Divider>
            <Typography variant="caption"> Login with</Typography>
          </Divider>
        </Grid>
      </Grid>
    </form>
  );
}
